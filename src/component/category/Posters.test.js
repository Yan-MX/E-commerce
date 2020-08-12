import React from "react";
import { render } from "@testing-library/react";
import Posters from "./Posters";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Posters />);
  });
});
