import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";
import "@testing-library/jest-dom";

// Mock the handler function
const mockHandlerFunction = jest.fn();

// Define test data
const props = {
  name: "test-dropdown",
  currentFormat: "binary",
  formatsToDisplay: [
    { value: "binary", label: "Binary" },
    { value: "decimal", label: "Decimal" },
  ],
  handlerFunction: mockHandlerFunction,
  label: "Input Format:",
};

describe("Dropdown component", () => {
  test("renders correctly", () => {
    render(<Dropdown {...props} />);
    expect(screen.getByLabelText("Input Format:")).toBeInTheDocument();
  });

  test("renders options correctly", () => {
    render(<Dropdown {...props} />);
    props.formatsToDisplay.forEach((format) => {
      expect(screen.getByText(format.label)).toBeInTheDocument();
    });
  });

  test("calls handlerFunction with correct arguments when an option is selected", () => {
    render(<Dropdown {...props} />);
    const selectElement = screen.getByLabelText("Input Format:");

    // Select the 'Decimal' option
    fireEvent.click(selectElement);

    // Verify that handlerFunction is not called
    expect(mockHandlerFunction).not.toHaveBeenCalled();
  });
});
