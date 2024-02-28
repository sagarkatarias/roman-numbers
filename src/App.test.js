import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';

test('renders App component', () => {
  render(<App />);
  const converterElement = screen.getByText("Number Converter");
  expect(converterElement).toBeInTheDocument();
});
