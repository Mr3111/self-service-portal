import React from 'react';
import { shallow } from 'enzyme';
import AddFieldComponent from './addFieldComponent';

describe('AddFieldComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddFieldComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
