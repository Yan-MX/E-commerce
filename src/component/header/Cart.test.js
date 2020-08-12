import React from "react";
import { render } from "@testing-library/react";
import Cart from "./Cart";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Cart />);
  });

  test("has Shopping Cart text", () => {
    const { getByText } = render(<Cart />);
    expect(getByText(/Shopping Cart/)).toBeInTheDocument();
  });
});
