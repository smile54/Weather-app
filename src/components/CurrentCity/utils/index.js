import { FLAG_LINK, ICON_LINK } from '../../../constants/apiLinks';

const utils = {
  getFlagLink(country) {
    return `${FLAG_LINK}${country}.svg`;
  },
  getWeatherIcon(icon) {
    return `${ICON_LINK}${icon}.png`;
  },
  getWindArrowIconSrc() {
    return `${ICON_LINK}wind-arrow.png`;
  },
  getSunSetIconSrc() {
    return `${ICON_LINK}sunset.png`;
  },
  getSunRiseIconSrc() {
    return `${ICON_LINK}sunrise.png`;
  },
};
export default utils;
