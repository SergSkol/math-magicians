import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
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

export default App;
