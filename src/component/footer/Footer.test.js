import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Footer />);
  });
});
