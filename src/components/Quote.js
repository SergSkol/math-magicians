import React from 'react';
import PropTypes from 'prop-types';

const arrQuotes = [
  'Math is fun. ...',
  'Pure mathematics is the world`s best game. ...',
  'Mathematics consists of proving the most obvious thing in the least obvious way. ...',
  'In mathematics, you don`t understand things. ...',
  'There are two ways to do great mathematics. ...',
  'Five out of four people have trouble with fractions. ...',
  'Mathematics is a hard thing to love.',
];

const getRandomIndex = () => {
  const random = Math.random();
  const randomIndex = Math.floor(arrQuotes.length * random);
  return randomIndex;
};

const Quote = (props) => {
  const { quoteIndex } = props;

  const GenerateQuote = () => {
    const quote = [];

    const index = quoteIndex || getRandomIndex();

    quote.push(<p key={index}> {arrQuotes[index]} </p>);
    return (quote);
  };

  return (
    <div className="quoteContent">
      <GenerateQuote />
    </div>
  );
};

Quote.defaultProps = {
  quoteIndex: getRandomIndex(),
};

Quote.propTypes = {
  quoteIndex: PropTypes.number,
};

export default Quote;
