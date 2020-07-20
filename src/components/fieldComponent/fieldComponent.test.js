import React from 'react';
import { shallow } from 'enzyme';
import FieldComponent from './fieldComponent';

describe('FieldComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FieldComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
