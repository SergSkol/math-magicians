import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Test home page with snapshot', () => {
  const tree = renderer
    .create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
