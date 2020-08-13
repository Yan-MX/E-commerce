import React from "react";
import { render } from "@testing-library/react";
import Cards from "./Cards";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Cards />);
  });
});
