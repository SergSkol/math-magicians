/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
/* eslint-env es6 */
import React from 'react';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
