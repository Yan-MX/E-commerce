import React from "react";
import { render } from "@testing-library/react";
import MyAccount from "./MyAccount";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<MyAccount />);
  });

  test("has My Account text", () => {
    const { getByText } = render(<MyAccount />);
    expect(getByText(/My Account/)).toBeInTheDocument();
  });
});
