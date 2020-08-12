import React from "react";
import { render } from "@testing-library/react";
import Sex from "./Sex";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Sex />);
  });

  test("has category text", () => {
    const { getByText } = render(<Sex />);
    expect(getByText("WOMEN")).toBeInTheDocument();
    expect(getByText("MEN")).toBeInTheDocument();
    expect(getByText("CHILDREN")).toBeInTheDocument();
  });
});
