import React from "react";
import { render } from "@testing-library/react";
import Product from "./Product";

describe("Test component", () => {
  test.skip("renders without crashing", () => {
    render(<Product />);
  });

  test.skip("has product text", () => {
    const { getByText } = render(<Product />);
    expect(getByText("Kr")).toBeInTheDocument();
  });
});
