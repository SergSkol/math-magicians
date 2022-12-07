/* eslint-disable */
import React, { Component } from 'react';
import arrButtons from './Buttons';

export default class Calculator extends Component {
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
