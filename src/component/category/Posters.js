import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
const Posters = ({ bg, data }) => {
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "300px";
  const b = "150px";
  const c = "10px";
  const d = "5px";
  let Img = styled.img`
    margin: ${isMediumScreen ? c : d};
    height: ${isMediumScreen ? a : b};
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);
  `;

  return (
    <div>
      <Img src={bg} id={data.id} alt="Product Picture" />
    </div>
  );
};

export default Posters;
