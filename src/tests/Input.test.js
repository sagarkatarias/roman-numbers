import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "../components/Input";
import "@testing-library/jest-dom";

// Mock the onConvert function
const mockOnConvert = jest.fn();

// Define test props
const props = {
  onConvert: mockOnConvert,
};

describe("Input component", () => {
  test("renders correctly", () => {
    render(<Input {...props} />);
    expect(screen.getByLabelText("Number:")).toBeInTheDocument();
    expect(screen.getByLabelText("Input Format:")).toBeInTheDocument();
    expect(screen.getByLabelText("Output Format:")).toBeInTheDocument();
    expect(screen.getByText("Convert")).toBeInTheDocument();
  });

  test("handles user input correctly", () => {
    render(<Input {...props} />);
    const numberInput = screen.getByLabelText("Number:");

    // Simulate user input in the number input field
    fireEvent.change(numberInput, { target: { value: "23" } });

    // Verify that the input value is correctly set
    expect(numberInput.value).toBe("23");
  });

  test("calls onConvert with decimal option when \"Convert\" button is clicked", () => {
    render(<Input {...props} />);
    const numberInput = screen.getByLabelText("Number:");
    const convertButton = screen.getByText("Convert");

    // Set input values
    fireEvent.change(numberInput, { target: { value: "23" } });

    // Click the "Convert" button
    fireEvent.click(convertButton);

    // Verify that onConvert is called with the correct arguments
    expect(mockOnConvert).toHaveBeenCalledWith("23", "decimal", "roman");
  });

  test("calls onConvert with binary option when \"Convert\" button is clicked", () => {
    render(<Input onConvert={mockOnConvert} />);

    // Get input elements
    const numberInput = screen.getByLabelText("Number:");
    const inputFormatSelect = screen.getByLabelText("Input Format:");
    const outputFormatSelect = screen.getByLabelText("Output Format:");
    const convertButton = screen.getByText("Convert");

    // Set input values
    fireEvent.change(numberInput, { target: { value: "10111" } });
    fireEvent.change(inputFormatSelect, { target: { value: "binary" } });
    fireEvent.change(outputFormatSelect, { target: { value: "roman" } });

    fireEvent.click(convertButton);

    // Verify that onConvert is called with the correct arguments
    expect(mockOnConvert).toHaveBeenCalledWith("10111", "binary", "roman");
  });
});
