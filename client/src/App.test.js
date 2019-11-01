import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from "./components/navbar";

test('displays Dark Mode button', () => {
  const { getByText } = render(<Navbar />);
  getByText('Dark');
})

test('displays H1 on navbar', () => {
  const { getByText } = render(<Navbar />);
  getByText('Womens World Cup');
})

test('displays H2 on navbar', () => {
  const { getByText } = render(<Navbar />);
  getByText('Players:');
})

// test('displays cards', () => {
//   const { getByText } = render(<App />);
//   getAllByText('Country');
// })