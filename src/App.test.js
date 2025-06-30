// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Astrolite Dashboard text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Astrolite/i);
  expect(linkElement).toBeInTheDocument();
});