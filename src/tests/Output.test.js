import React from "react";
import { render, screen } from "@testing-library/react";
import Output from "../components/Output";
import "@testing-library/jest-dom";

describe("Output component", () => {
  test("renders the result correctly", () => {
    // Render Output component with a mock result
    render(<Output result="XXIII" />);

    // Assert that the result is rendered correctly
    expect(screen.getByText("Result:")).toBeInTheDocument();
    expect(screen.getByText("XXIII")).toBeInTheDocument();
  });
});
