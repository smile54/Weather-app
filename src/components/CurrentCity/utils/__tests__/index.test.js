import utils from '../index';
import { FLAG_LINK } from '../../../../constants/apiLinks';

describe('utils', () => {
  it('should return vaild link', () => {
    const { getFlagLink } = utils;
    const testedCountry = 'ua';
    const result = getFlagLink(testedCountry);
    expect(result).toEqual(`${FLAG_LINK}${testedCountry}.svg`);
  });
});
