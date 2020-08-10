import React from "react";
import styled from "@emotion/styled";
const Posters = ({ bg }) => {
  let Img = styled.img`
    margin: 20px;
    height: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);
  `;
  return (
    <div>
      <Img src={bg} alt="Product Picture" />
    </div>
  );
};

export default Posters;
