import React from 'react';

const Quote = () => {
  const GenerateQuote = () => {
    const quote = [];
    const arrQuotes = [
      'Math is fun. ...',
      'Pure mathematics is the world`s best game. ...',
      'Mathematics consists of proving the most obvious thing in the least obvious way. ...',
      'In mathematics, you don`t understand things. ...',
      'There are two ways to do great mathematics. ...',
      'Five out of four people have trouble with fractions. ...',
      'Mathematics is a hard thing to love.',
    ];

    const random = Math.random();
    const randomIndex = Math.floor(arrQuotes.length * random);

    quote.push(<p> {arrQuotes[randomIndex]} </p>);
    return (quote);
  };

  return (
    <div className="quoteContent">
      <p>
        <GenerateQuote />
      </p>
    </div>
  );
};

export default Quote;
