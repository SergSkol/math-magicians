/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render", "CreateButtons"] }] */
/* eslint-env es6 */
import React from 'react';
import arrButtons from './Buttons';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.CreateButtons = this.CreateButtons.bind(this);
  }

  handleClick(event) {
    const result = calculate(this.state, event.target.innerHTML);
    this.setState(result);
  }

  CreateButtons() {
    const btns = [];
    arrButtons.forEach((btn) => {
      btns.push(<button
        key={btn.key}
        className={btn.class}
        onClick={this.handleClick}
        >{btn.show}</button>);
    });
    return (btns);
  }

  render() {
    return (
      <div className="container">
        <div className="result">
          <p> {this.state.total}</p>
          <p> {this.state.operation}</p>
          <p> {this.state.next}</p>
        </div>
          <this.CreateButtons />
      </div>
    );
  }
}
