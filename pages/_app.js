/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import 'flexbox-grid-sass/src/flexbox-grid.scss';
import 'normalize-scss/sass/normalize/_import-now.scss';
import '../src/styles/main.scss';

function WeatherApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

WeatherApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.oneOfType([PropTypes.object]),
};

WeatherApp.defaultProps = {
  Component: () => null,
  pageProps: {},
};

export default WeatherApp;
