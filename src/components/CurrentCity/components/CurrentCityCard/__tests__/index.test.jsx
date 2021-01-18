import { mount } from 'enzyme';
import CurrentCityCard from '../index';
import mocks from './__mocks__';

describe('CurrentCityCard', () => {
  it('should render correctly', () => {
    const { icons, weatherInfo } = mocks;
    const wrapper = mount(
      <CurrentCityCard
        icons={icons}
        weatherInfo={weatherInfo}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });
});
