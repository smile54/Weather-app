import React from 'react';
import Autosuggest from 'react-autosuggest';
import {KEY, MAIN_LINK, UNITS, FLAG_LINK} from './api-links';


function getMatchingLanguages(value) {
  if (value.length < 3) return [];
  const escapedValue = escapeRegexCharacters(value.trim());
  var link = `${MAIN_LINK}find?q=${value}&mode=json&units=${UNITS}&appid=${KEY}`;
  if (escapedValue === '') {
    return [];
  }
  fetch(link)
          .then((response) => {
            var responseData = response.json();
            if (response.status == 200) {
                return responseData.then((weather) => this.state.weather = weather.list);
            } else {
                throw new Error('Server Error!');
              }
          });
  const regex = new RegExp('^' + escapedValue, 'i');
  console.log(this.state.weather);
  return this.state.weather;
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
  console.log(suggestion);
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  console.log('renderSuggestion');
  var flagLink = `${FLAG_LINK}${suggestion.sys.country.toLowerCase()}.svg`;
  return (
    <div>
      {suggestion.name}, 
      {suggestion.sys.country}
      <img src={flagLink} alt='Country Flag' style={{height: '26px'}} />
    </div>
  );
}

export default class SearchBar extends React.Component {
  constructor() {
    super();
    getMatchingLanguages = getMatchingLanguages.bind(this);
    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
      weather: []
    };
    
    this.lastRequestId = null;
  }
  
  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }
    
    this.setState({
      isLoading: true
    });
    this.setState({
      isLoading: false,
      suggestions: getMatchingLanguages(value)
    })

    // console.log(this.state.suggestions);

    // Fake request
    // this.lastRequestId = setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    //     suggestions: getMatchingLanguages(value)
    //   });
    // }, 1000);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
    
  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      placeholder: "Type a city name",
      value,
      onChange: this.onChange
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
    
    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}