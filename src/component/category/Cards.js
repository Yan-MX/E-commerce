import React from "react";
const Cards = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.listprice} kr</p>
      <p>{data.saleprice} kr</p>
    </div>
  );
};

export default Cards;
