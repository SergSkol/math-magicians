/* eslint-disable */
import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CreateButtons() {
    const arrButtons = [
      {
        key: 'ac',
        show: 'AC',
        class:'btn-standart',
      },
      {
        key: 'plus-minus',
        show: '+/-',
        class: 'btn-standart',
      },
      {
        key: 'procent',
        show: '%',
        class: 'btn-standart',
      },
      {
        key: 'div',
        show: '/',
        class: 'btn-highlight',
      },
      {
        key: '7',
        show: '7',
        class: 'btn-standart',
      },
      {
        key: '8',
        show: '8',
        class: 'btn-standart',
      },
      {
        key: '9',
        show: '9',
        class: 'btn-standart',
      },
      {
        key: 'mult',
        show: '*',
        class: 'btn-highlight',
      },
      {
        key: '4',
        show: '4',
        class: 'btn-standart',
      },
      {
        key: '5',
        show: '5',
        class: 'btn-standart',
      },
      {
        key: '6',
        show: '6',
        class: 'btn-standart',
      },
      {
        key: 'minus',
        show: '-',
        class: 'btn-highlight',
      },
      {
        key: '1',
        show: '1',
        class: 'btn-standart',
      },
      {
        key: '2',
        show: '2',
        class: 'btn-standart',
      },
      {
        key: '3',
        show: '3',
        class: 'btn-standart',
      },
      {
        key: 'plus',
        show: '+',
        class: 'btn-highlight',
      },
      {
        key: '0',
        show: '0',
        class: 'zero',
      },
      {
        key: 'dot',
        show: '.',
        class: 'btn-standart',
      },
      {
        key: 'equal',
        show: '=',
        class: 'btn-highlight',
      },
    ];

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
