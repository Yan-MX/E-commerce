import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
const Cards = ({ data }) => {
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "24px";
  const b = "10px";
  const c = "240px";
  const d = "120x";
  let P = styled.p`
    font-size: ${isMediumScreen ? a : b};
    display: block;
    width: ${isMediumScreen ? c : d};
    word-wrap: break-word;
    white-space: initial;
    text-align: center;
  `;
  let P1 = styled.p`
    font-size: ${isMediumScreen ? a : b};
    display: block;
    width: ${isMediumScreen ? c : d};
    word-wrap: break-word;
    white-space: initial;
    text-align: center;
    text-decoration: line-through;
  `;
  let P2 = styled.p`
    font-size: ${isMediumScreen ? a : b};
    display: block;
    width: ${isMediumScreen ? c : d};
    word-wrap: break-word;
    white-space: initial;
    text-align: center;
    color: salmon;
  `;

  return typeof data !== "undefined" && data !== null ? (
    <div>
      <P id={data.id}>{data.name}</P>
      <P1 id={data.id}>{data.listprice} kr</P1>
      <P2 id={data.id}>{data.saleprice} kr</P2>
    </div>
  ) : (
    <div>No product data</div>
  );
};

export default Cards;
