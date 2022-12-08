/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render", "CreateButtons"] }] */
/* eslint-env es6 */
import React from 'react';
import arrButtons from './Buttons';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CreateButtons() {
    const btns = [];
    arrButtons.forEach((btn) => {
      btns.push(<button key={btn.key} className={btn.class}>{btn.show}</button>);
    });
    return (btns);
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
          <this.CreateButtons />
      </div>
    );
  }
}
