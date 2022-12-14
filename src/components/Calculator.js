import React, { useState } from 'react';
import arrButtons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState({ ...state, ...calculate(state, event.target.innerHTML) });
  };

  const CreateButtons = () => {
    const btns = [];
    arrButtons.forEach((btn) => {
      btns.push(<button
        key={btn.key}
        className={btn.class}
        onClick={handleClick}
        >{btn.show}</button>);
    });
    return (btns);
  };

  return (
    <div className='calcContent'>
      <h2>Let`s do some math!</h2>
      <div className="container">
        <div className="result">
          <p> {state.total}</p>
          <p> {state.operation}</p>
          <p> {state.next}</p>
        </div>
          <CreateButtons />
      </div>
    </div>
  );
};

export default Calculator;
