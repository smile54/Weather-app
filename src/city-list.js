import React from 'react';
import CurrentCity from './current-city';

export default class CityList extends React.Component {
	render(){
		return (
			<div className="city-list">
				<div className='row'>
					<CurrentCity />
				</div>
			</div>
		)
	}
}