/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
/* eslint-env es6 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/calculator"
            element={<Calculator />}
          />
          <Route
            path="/quote"
            element={<Quote />}
          />
        </Routes>
      </Router>
    );
  }
}
