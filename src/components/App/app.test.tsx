import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './index';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Loading from 'components/Loading';

describe('App component', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it('renders a container component', () => {
    expect(container.find(Container).length).toEqual(1);
  });

  it('renders a loading component', () => {
    expect(container.find(Loading).length).toEqual(1);
  });

  it('renders a router component', () => {
    expect(container.find(BrowserRouter).length).toEqual(1);
  });
});
