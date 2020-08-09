import React from "react";
import Cards from "./Cards";
import Posters from "./Posters";
import Jumbotron from "react-bootstrap/Jumbotron";
const Category = () => {
  return (
    <div>
      <Posters />
      <Cards />
    </div>
  );
};

export default Category;
