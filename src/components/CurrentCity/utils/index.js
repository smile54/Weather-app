import { FLAG_LINK, ICON_LINK } from '../../../constants/apiLinks';

const getFlagLink = (country) => `${FLAG_LINK}${country}.svg`;
const getWeatherIcon = (icon) => `${ICON_LINK}${icon}.png`;
const getWindArrowIconSrc = () => `${ICON_LINK}wind-arrow.png`;
const getSunSetIconSrc = () => `${ICON_LINK}sunset.png`;
const getSunRiseIconSrc = () => `${ICON_LINK}sunrise.png`;

export default {
  getFlagLink,
  getWeatherIcon,
  getWindArrowIconSrc,
  getSunSetIconSrc,
  getSunRiseIconSrc,
};
