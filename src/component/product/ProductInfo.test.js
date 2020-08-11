import React from "react";
import { render } from "@testing-library/react";
import ProductInfo from "./ProductInfo";

describe("Test component", () => {
  test.skip("renders without crashing", () => {
    render(<ProductInfo />);
  });
});
