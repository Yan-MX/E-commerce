import React from "react";
import ReactDOM from "react-dom";
import WishingList from "./WishingList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WishingList />, div);
});
