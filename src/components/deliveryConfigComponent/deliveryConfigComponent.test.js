import React from 'react';
import { shallow } from 'enzyme';
import DeliveryConfigComponent from './deliveryConfigComponent';

describe('DeliveryConfigComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeliveryConfigComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
