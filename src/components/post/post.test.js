import React from 'react';
import { shallow } from 'enzyme';
import Post from './post';

describe('<Post />', () => {
  test('renders', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper).toMatchSnapshot();
  });
});
