import React from "react";
import ReactDOM from "react-dom";
import Sex from "./Sex";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sex />, div);
});
