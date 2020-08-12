import React from "react";
import { render } from "@testing-library/react";
import Product from "./Product";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Product />);
  });
});
