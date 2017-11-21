import React from 'react';
import moment from 'moment';
import {KEY, MAIN_LINK, UNITS, FLAG_LINK, ICON_LINK, IP_LOC} from './api-links';

export default class CurrentCity extends React.Component {
	constructor(props) {
		super(props);
		this.fetchWeather = this.fetchWeather.bind(this);
		this.success = this.success.bind(this);
		this.handle_error = this.handle_error.bind(this);
		const l = 'loading...';
		this.state = {
			coordinates: {lon: 0, lat: 0},
			weather: {
				name: l,
				weather: [{main: l, description: l, icon: '01d'}],
				wind: {speed: l, deg: 0},
				main: {temp: 0, pressure: l, humidity: l},
				sys: {country: 'UA', sunrise: '', sunset: ''}
			}
		};
    navigator.geolocation.getCurrentPosition(this.success, this.handle_error);
}
	handle_error(err){
            	fetch(IP_LOC)
        			.then((response) => {
        				var responseData = response.json();
        				if (response.status == 200) {
      						return responseData.then((data) => 
      							this.fetchWeather(data.loc.split(',')[0], data.loc.split(',')[1])
      						);
   						} else {
      						throw new Error('Server Error!');
    			  		}
        			})
	};
	success(position){
        this.state.coordinates = {
    		lat: position.coords.latitude,
    		lon: position.coords.longitude
    	};
		this.fetchWeather(this.state.coordinates.lat, this.state.coordinates.lon);
	}
	fetchWeather(lat, lon){
			var link = `${MAIN_LINK}weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${KEY}`
			fetch(link)
  				.then((response) => {
    				var responseData = response.json();
    				if (response.status == 200) {
      					return responseData.then((weather) => this.setState({ weather: weather }));
   					} else {
      					throw new Error('Server Error!');
    			  	}
  				})
	}
	render(){
		
		var time = 1510693558;
		var weather = this.state.weather;
		var arrowRotate = {
			transform: `rotate(${weather.wind.deg}deg)`
		};
		var flagLink = `${FLAG_LINK}${weather.sys.country.toLowerCase()}.svg`;
		const weatherIcon = `${ICON_LINK}${weather.weather[0].icon}.png`;
		const weatherDesc = weather.weather[0].description;
		const windArrow = `${ICON_LINK}wind-arrow.png`;
		const sunSet = `${ICON_LINK}sunrise.png`;
		const sunRise = `${ICON_LINK}sunset.png`;
		return (
			<div className="city-list-item col col--xs-12 col--md-12 col--lg-12 col--xl-12">
				<div className='city-list-item-wrapper current-city'>
					<div className='weather-icon'>
						<img src={weatherIcon} alt='Weather icon'/>
					</div>
					<div className='weather-info'>
						<div className='location-info'>
							<span className='city-name'>{weather.name}</span>
							<div className='country-info'>{weather.sys.country}
								<img src={flagLink} alt='Country flag'/>
							</div>
						</div>
						<div className='weather-desc'>
							<span className='temp'>{weather.main.temp.toFixed(0)}&deg;C,</span>
							<span className='weather-status'>{weatherDesc.charAt(0).toUpperCase()}{weatherDesc.slice(1)}</span>
						</div>
						<button className='show-additional'>Forecast</button>
					</div>
					<div className='wind-status'>
						<img src={windArrow} alt='Wind path arrow' style={arrowRotate} />
						<span className='wind-speed'>Wind speed: {weather.wind.speed}m/sec</span>
					<div className='additional'>
						<span className='additional-text'>Humidity: {weather.main.humidity}%</span>
						<span className='additional-text'>Pressure: {(weather.main.pressure*0.75006375541921).toFixed(0)} mm Hg</span>
					</div>
					</div>
					<div className='sun-time'>
						<div className='sun-time-container'>
							<img src={sunRise} alt='Sunrise icon'/>
							<span className='sun-time-text'>{moment.unix(weather.sys.sunrise).format('HH:mm:ss')}</span>
						</div>
						<div className='sun-time-container'>
							<img src={sunSet} alt='Sunset icon'/>
							<span className='sun-time-text'>{moment.unix(weather.sys.sunset).format('HH:mm:ss')}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}