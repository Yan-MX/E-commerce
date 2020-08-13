import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Contact />);
  });
});
