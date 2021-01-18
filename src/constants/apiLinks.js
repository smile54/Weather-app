export const OPEN_WEATHER_MAP_KEY = '93de00cc840954b1b665c0239301b34e';
const IP_LOCATION_SERVICE_KEY = 'ad2efd6d679b54';
export const MAIN_LINK = 'https://api.openweathermap.org/data/2.5/';
export const FLAG_LINK = 'https://lipis.github.io/flag-icon-css/flags/4x3/';
export const IP_LOC = `https://ipinfo.io/json?token=${IP_LOCATION_SERVICE_KEY}`;
// eslint-disable-next-line operator-linebreak
export const ICON_LINK =
  process.env.NODE_ENV === 'production' ? '/Weather_app/assets/' : '/assets/';
export const UNITS = 'metric';
