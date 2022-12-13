import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1>Math Magic</h1>
    <ul className='navMenu'>
      <li><Link to="/" className="navItem">Home</Link></li>
      <li><Link to="/calculator" className="navItem">Calculator</Link></li>
      <li><Link to="/quote" className="navItem">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
