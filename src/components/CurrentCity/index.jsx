import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { detect } from 'detect-browser';

import {
  OPEN_WEATHER_MAP_KEY,
  MAIN_LINK,
  UNITS,
  IP_LOC,
} from '../../constants/apiLinks';

import utils from './utils';
import DISPLAY_TIME_FORMAT from '../../constants/timeFormat';
import navigatorPermissions from '../../constants/browserSupport';
import CurrentCityCard from './components/CurrentCityCard';

const {
  getFlagLink, getWeatherIcon, getWindArrowIconSrc, getSunSetIconSrc, getSunRiseIconSrc,
} = utils;

const CurrentCity = () => {
  const [weatherData, setWeather] = useState({ weather: null, isLoading: true });
  const { isLoading, weather } = weatherData;

  const fetchWeather = (latitude, longitude) => {
    const link = `${MAIN_LINK}weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${OPEN_WEATHER_MAP_KEY}`;
    fetch(link)
      .then((response) => {
        const responseData = response.json();
        if (response.status === 200) {
          return responseData.then((weatherResponse) => {
            setWeather({ weather: weatherResponse, isLoading: false });
          });
        }
        throw new Error('Something went wrong!');
      });
  };

  const fetchUserByIpLocationInfo = () => {
    fetch(IP_LOC)
      .then((response) => {
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

  const getWeatherExperimental = () => {
    navigator.permissions.query({ name: 'geolocation' })
      .then(({ state }) => {
        if (state === 'granted') {
          navigator
            .geolocation
            .getCurrentPosition(fetchWeatherByUserCoordinates);
        }
        if (state === 'prompt') {
          fetchUserByIpLocationInfo();
          navigator
            .geolocation
            .getCurrentPosition(fetchWeatherByUserCoordinates);
        }
        if (state === 'denied') {
          fetchUserByIpLocationInfo();
        }
      });
  };

  const getWeather = () => {
    navigator
      .geolocation
      .getCurrentPosition(fetchWeatherByUserCoordinates, fetchUserByIpLocationInfo);
  };

  const loadWeather = () => {
    const { name } = detect();
    const isBrowserSupported = !navigatorPermissions.includes(name);
    if (isBrowserSupported) {
      getWeatherExperimental();
    } else {
      getWeather();
    }
  };

  useEffect(() => {
    loadWeather();
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

  const {
    name: cityName,
    sys: {
      country: countryName,
      sunrise: sunRiseTime,
      sunset: sunSetTime,
    },
    main: { temp, humidity, pressure },
    wind: { speed: windSpeed, deg: windDegree },
  } = weather;

  const { icon: weatherIconIndex } = weather.weather[0];

  const arrowRotate = {
    transform: `rotate(${windDegree}deg)`,
  };

  const flagIconSrc = getFlagLink(countryName.toLowerCase());
  const weatherIconSrc = getWeatherIcon(weatherIconIndex);
  const { description: weatherDescription } = weather.weather[0];
  const windArrow = getWindArrowIconSrc();
  const sunSetIconSrc = getSunSetIconSrc();
  const sunRiseIconSrc = getSunRiseIconSrc();

  const weatherInfo = {
    cityName,
    countryName,
    temperature: temp.toFixed(0),
    weatherDescription,
    windSpeed,
    humidity,
    arrowRotate,
    pressure: (pressure * 0.75006375541921).toFixed(0),
    sunriseTime: moment.unix(sunRiseTime).format(DISPLAY_TIME_FORMAT),
    sunsetTime: moment.unix(sunSetTime).format(DISPLAY_TIME_FORMAT),
  };

  const icons = {
    windArrow,
    weatherIconSrc,
    sunSetIconSrc,
    sunRiseIconSrc,
    flagIconSrc,
  };

  return (
    <CurrentCityCard
      weatherInfo={weatherInfo}
      icons={icons}
    />
  );
};

export default CurrentCity;
