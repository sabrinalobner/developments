import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sabrina Gail Lobner/i);
  expect(linkElement).toBeInTheDocument();
});
