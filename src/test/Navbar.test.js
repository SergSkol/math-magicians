import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
       <nav className="navBar">
            <h1>Math Magic</h1>
            <ul className='navMenu'>
            <li><Link to="/" className="navItem">Home</Link></li>
            <li><Link to="/calculator" className="navItem">Calculator</Link></li>
            <li><Link to="/quote" className="navItem">Quote</Link></li>
            </ul>
        </nav>
    );

    useEvent.click(screen.getByText('Home'));
    useEvent.click(screen.getByText('Calculator'));
    useEvent.click(screen.getByText('Quote'));
  });
});
