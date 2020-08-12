import React from "react";
import { render } from "@testing-library/react";
import ProductInfo from "./productInfo";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<ProductInfo />);
  });
});
