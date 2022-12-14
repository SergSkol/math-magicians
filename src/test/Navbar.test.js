import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(<Calculator />);

    expect(screen.getByText('Let`s do some math!')).toBeInTheDocument();
  });

  test('Test for events in Claculator component', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(screen.getByText('2.5')).toBeInTheDocument();
  });
});
