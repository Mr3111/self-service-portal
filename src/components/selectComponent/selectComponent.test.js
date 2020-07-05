import React from 'react';
import { shallow } from 'enzyme';
import SelectComponent from './selectComponent';

describe('SelectComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SelectComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
