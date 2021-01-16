import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import {
  KEY,
  MAIN_LINK,
  UNITS,
  FLAG_LINK,
  ICON_LINK,
  IP_LOC,
} from '../../constants/api-links';

const CurrentCity = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = (latitude, longitude) => {
    const link = `${MAIN_LINK}weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${KEY}`;
    fetch(link).then((response) => {
      const responseData = response.json();
      if (response.status === 200) {
        return responseData.then((weatherResponse) => {
          setWeather(weatherResponse);
          setIsLoading(false);
        });
      }
      throw new Error('Something went wrong!');
    });
  };

  const fetchUserByIpLocationInfo = () => {
    fetch(IP_LOC).then((response) => {
      const responseData = response.json();
      if (response.status === 200) {
        return responseData.then((data) => {
          const { loc } = data;
          const [latitude, longitude] = loc.split(',');
          fetchWeather(latitude, longitude);
        });
      }
      throw new Error('Something went wrong!');
    });
  };

  const fetchWeatherByUserCoordinates = ({ coords: { latitude, longitude } }) => {
    fetchWeather(latitude, longitude);
  };

  useEffect(() => {
    navigator
      .geolocation
      .getCurrentPosition(fetchWeatherByUserCoordinates, fetchUserByIpLocationInfo);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  const arrowRotate = {
    transform: `rotate(${weather.wind.deg}deg)`,
  };

  const flagLink = `${FLAG_LINK}${weather.sys.country.toLowerCase()}.svg`;
  const weatherIcon = `${ICON_LINK}${weather.weather[0].icon}.png`;
  const weatherDesc = weather.weather[0].description;
  const windArrow = `${ICON_LINK}wind-arrow.png`;
  const sunSet = `${ICON_LINK}sunrise.png`;
  const sunRise = `${ICON_LINK}sunset.png`;

  return (
    <div className="city-list-item col col--xs-12 col--md-12 col--lg-12 col--xl-12">
      <div className="city-list-item-wrapper current-city">
        <div className="weather-icon">
          <img src={weatherIcon} alt="Weather icon" />
        </div>
        <div className="weather-info">
          <div className="location-info">
            <span className="city-name">{weather.name}</span>
            <div className="country-info">
              {weather.sys.country}
              <img src={flagLink} alt="Country flag" />
            </div>
          </div>
          <div className="weather-desc">
            <span className="temp">
              {weather.main.temp.toFixed(0)}
              &deg;C,
            </span>
            <span className="weather-status">
              {weatherDesc.charAt(0).toUpperCase()}
              {weatherDesc.slice(1)}
            </span>
          </div>
        </div>
        <div className="wind-status">
          <img src={windArrow} alt="Wind path arrow" style={arrowRotate} />
          <span className="wind-speed">
            Wind speed:
            {' '}
            {weather.wind.speed}
            m/sec
          </span>
          <div className="additional">
            <span className="additional-text">
              Humidity:
              {' '}
              {weather.main.humidity}
              %
            </span>
            <span className="additional-text">
              Pressure:
              {' '}
              {(weather.main.pressure * 0.75006375541921).toFixed(0)}
              {' '}
              mm Hg
            </span>
          </div>
        </div>
        <div className="sun-time">
          <div className="sun-time-container">
            <img src={sunRise} alt="Sunrise icon" />
            <span className="sun-time-text">
              {moment.unix(weather.sys.sunrise).format('HH:mm:ss')}
            </span>
          </div>
          <div className="sun-time-container">
            <img src={sunSet} alt="Sunset icon" />
            <span className="sun-time-text">
              {moment.unix(weather.sys.sunset).format('HH:mm:ss')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCity;
