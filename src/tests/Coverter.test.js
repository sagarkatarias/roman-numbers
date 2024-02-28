/* eslint-disable global-require */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Converter from "../routes/Converter";
import "@testing-library/jest-dom";

// Mock the Calculator module
jest.mock("../utils/Calculator", () => ({
  binaryToRoman: jest.fn(),
  decimalToRoman: jest.fn(),
}));

describe("Converter component", () => {
  test("handles conversion logic and updates result state", () => {
    // Render Converter component
    render(<Converter />);

    // Get input elements
    const numberInput = screen.getByLabelText("Number:");
    const inputFormatSelect = screen.getByLabelText("Input Format:");
    const outputFormatSelect = screen.getByLabelText("Output Format:");

    // Set input values
    fireEvent.change(numberInput, { target: { value: "23" } });
    fireEvent.change(inputFormatSelect, { target: { value: "decimal" } });
    fireEvent.change(outputFormatSelect, { target: { value: "roman" } });

    // Mock conversion function calls
    const mockBinaryToRoman = jest.fn().mockReturnValue("XXIII");
    const mockDecimalToRoman = jest.fn().mockReturnValue("XXIII");
    require("../utils/Calculator").binaryToRoman = mockBinaryToRoman;
    require("../utils/Calculator").decimalToRoman = mockDecimalToRoman;

    // Trigger conversion by clicking "Convert" button
    fireEvent.click(screen.getByText("Convert"));

    // Assert that the correct conversion function is called with the correct arguments
    expect(mockDecimalToRoman).toHaveBeenCalledWith("23");
    expect(mockBinaryToRoman).not.toHaveBeenCalled();

    // Assert that the result is updated correctly
    expect(screen.getByText("XXIII")).toBeInTheDocument();
  });
});
