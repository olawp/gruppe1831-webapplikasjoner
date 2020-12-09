import React from 'react';
import { mount, shallow } from 'enzyme';
import NoMatch from '../../src/components/NoMatch';

it('should contain the text "404"', () => {
  const wrapper = shallow(<NoMatch />);
  expect(wrapper.text()).toContain('404');
});
