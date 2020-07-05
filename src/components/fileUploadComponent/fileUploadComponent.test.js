import React from 'react';
import { shallow } from 'enzyme';
import FileUploadComponent from './fileUploadComponent';

describe('FileUploadComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FileUploadComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
