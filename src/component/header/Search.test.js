import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Search />);
  });
});
