import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('displays Dark Mode button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Dark');
})

test('displays H1 on navbar', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Womens World Cup');
})


test('displays Dark Mode button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Dark');
})

