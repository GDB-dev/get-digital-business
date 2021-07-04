import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tests sets link', () => {
  render(<App />);
  const linkElement = screen.getByText(/PRIMARY/i);
  expect(linkElement).toBeInTheDocument();
});