import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("has copyright text", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Copyright/)).toBeInTheDocument();
  });
});
