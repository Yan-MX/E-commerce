import React from "react";
import { render } from "@testing-library/react";
import WishingList from "./WishingList";

describe("Test component", () => {
  test("renders without crashing", () => {
    render(<WishingList />);
  });

  test("has Wishing List text", () => {
    const { getByText } = render(<WishingList />);
    expect(getByText(/Wishing List/)).toBeInTheDocument();
  });
});
