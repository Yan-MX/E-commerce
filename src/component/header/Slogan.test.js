import React from "react";
import { render } from "@testing-library/react";
import Slogan from "./Slogan";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Slogan />);
  });
});
