import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../components/Input';

// Mock the onConvert function
const mockOnConvert = jest.fn();

// Define test props
const props = {
  onConvert: mockOnConvert,
};

describe('Input component', () => {
  test('renders correctly', () => {
    render(<Input {...props} />);
    expect(screen.getByLabelText('Number:')).toBeInTheDocument();
    expect(screen.getByLabelText('Input Format:')).toBeInTheDocument();
    expect(screen.getByLabelText('Output Format:')).toBeInTheDocument();
    expect(screen.getByText('Convert')).toBeInTheDocument();
  });

  test('handles user input correctly', () => {
    render(<Input {...props} />);
    const numberInput = screen.getByLabelText('Number:');

    // Simulate user input in the number input field
    fireEvent.change(numberInput, { target: { value: '23' } });

    // Verify that the input value is correctly set
    expect(numberInput.value).toBe('23');
  });

});
