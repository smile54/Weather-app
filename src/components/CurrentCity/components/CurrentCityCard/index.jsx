import React from 'react';
import PropTypes from 'prop-types';

const CurrentCityCard = ({
  weatherInfo, icons,
}) => {
  const {
    cityName,
    countryName,
    temperature,
    weatherDescription,
    windSpeed,
    humidity,
    arrowRotate,
    pressure,
    sunriseTime,
    sunsetTime,
  } = weatherInfo;
  const {
    windArrow,
    weatherIconSrc,
    sunSetIconSrc,
    sunRiseIconSrc,
    flagIconSrc,
  } = icons;
  return (
    <div className="city-list-item col col--xs-12 col--md-12 col--lg-12 col--xl-12">
      <div className="city-list-item-wrapper current-city">
        <div className="weather-icon">
          <img src={weatherIconSrc} alt="Weather icon" />
        </div>
        <div className="weather-info">
          <div className="location-info">
            <span className="city-name">{cityName}</span>
            <div className="country-info">
              {countryName}
              <img src={flagIconSrc} alt="Country flag" />
            </div>
          </div>
          <div className="weather-desc">
            <span className="temp">
              {temperature}
              &deg;C,
            </span>
            <span className="weather-status">
              {weatherDescription}
            </span>
          </div>
        </div>
        <div className="wind-status">
          <img src={windArrow} alt="Wind path arrow" style={arrowRotate} />
          <span className="wind-speed">
            {`Wind speed: ${windSpeed} m/sec`}
          </span>
          <div className="additional">
            <span className="additional-text">
              {`Humidity: ${humidity}%`}
            </span>
            <span className="additional-text">
              {`Pressure: ${pressure} mm Hg`}
            </span>
          </div>
        </div>
        <div className="sun-time">
          <div className="sun-time-container">
            <img src={sunRiseIconSrc} alt="Sunrise icon" />
            <span className="sun-time-text">
              {sunriseTime}
            </span>
          </div>
          <div className="sun-time-container">
            <img src={sunSetIconSrc} alt="Sunset icon" />
            <span className="sun-time-text">
              {sunsetTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentCityCard.propTypes = {
  weatherInfo: PropTypes.shape({
    cityName: PropTypes.string,
    countryName: PropTypes.string,
    temperature: PropTypes.string,
    weatherDescription: PropTypes.string,
    windSpeed: PropTypes.number,
    humidity: PropTypes.number,
    arrowRotate: PropTypes.shape({
      transform: PropTypes.string,
    }),
    pressure: PropTypes.string,
    sunriseTime: PropTypes.string,
    sunsetTime: PropTypes.string,
  }).isRequired,
  icons: PropTypes.shape({
    windArrow: PropTypes.string,
    weatherIconSrc: PropTypes.string,
    sunSetIconSrc: PropTypes.string,
    sunRiseSrc: PropTypes.string,
    sunRiseIconSrc: PropTypes.string,
    flagIconSrc: PropTypes.string,
  }).isRequired,
};

export default CurrentCityCard;
