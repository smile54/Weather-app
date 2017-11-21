import FlexboxGrid from 'flexbox-grid-sass/src/flexbox-grid.scss';
import normalize from 'normalize-scss/sass/normalize/_import-now.scss';
import styles from './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Author from './author';
import CityList from './city-list';
import Searchbar from './searchBar';
const mount = document.getElementById('app');

class App extends React.Component {
	render(){
		return (
			<div>
				<div className="grid grid--container">
					<Searchbar />
					<CityList />
				</div>
				<Author />
			</div>
		)
	}
}
ReactDOM.render(<App/>, mount);