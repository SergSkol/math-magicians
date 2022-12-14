import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('Quote component snapshots test', () => {
  const tree = renderer
    .create(<Quote quoteIndex={5}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
