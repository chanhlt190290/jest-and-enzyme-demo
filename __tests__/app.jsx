import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/app.jsx';
import expect from 'expect';
import {mount, shallow, configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('App snapshot', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('App renders nested components', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });

  it('onAdd updates List', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();     
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual('Name 1');
  });
});