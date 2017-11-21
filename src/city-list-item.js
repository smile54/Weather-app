import React from 'react';

export default class CityListItem extends React.Component {
	render(){
		return (
			<div className="city-list-item col col--xs-12 col--md-6 col--lg-4 col--xl-4">
				<div className='city-list-item-wrapper'>
					<div className='weather-icon'>
						<img src='../assets/icons-png/01n.png' />
					</div>
					<div className='weather-info'>
						<div className='location-info'>
							<span className='city-name'>Niederschaeffolsheim</span>
							<div className='country-info'>UA
								<img src='https://lipis.github.io/flag-icon-css/flags/4x3/ua.svg' />
							</div>
						</div>
						<div className='weather-desc'>
							<span className='temp'>7&deg;C,</span>
							<span className='weather-status'>Cloudy</span>
						</div>
						<button className='show-additional'>Forecast</button>
					</div>
				</div>
			</div>
		)
	}
}