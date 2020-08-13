import React from "react";
import { render } from "@testing-library/react";
import Giftcard from "./Giftcard";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<Giftcard />);
  });
});
