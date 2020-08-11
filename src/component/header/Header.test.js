import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });
});
