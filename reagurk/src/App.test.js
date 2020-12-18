import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the parking page', () => {
  render(<App />);
  const linkElement = screen.getByText("Contribute");
  expect(linkElement).toBeInTheDocument();
});
