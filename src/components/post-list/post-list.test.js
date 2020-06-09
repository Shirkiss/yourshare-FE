import React from 'react';
import { shallow } from 'enzyme';
import PostList from './post-list';

describe('<PostList />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostList />);
    expect(wrapper).toMatchSnapshot();
  });
});
