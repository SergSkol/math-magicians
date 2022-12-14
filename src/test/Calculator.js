import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Calculator component snapshots test', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
