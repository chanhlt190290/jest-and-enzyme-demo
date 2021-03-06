import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Welcome from '../src/welcome.jsx';


describe('Welcome', () => {
  it('Welcome renders hello world', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});
