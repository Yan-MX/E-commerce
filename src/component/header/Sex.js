import React from "react";
import styled from "@emotion/styled";
const Sex = ({ setScreen, setQuery }) => {
  let Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 14px;
  `;
  let P = styled.p`
    margin-right: 30px;
  `;
  const ClickHandler = (e) => {
    setScreen("main");
  };
  const SearchHandler = (e) => {
    setQuery("Women");
    setScreen("search");
  };
  const SearchHandler2 = (e) => {
    setQuery("Men");
    setScreen("search");
  };
  return (
    <Container>
      <P onClick={ClickHandler}>HOME</P>
      <P>|</P>
      <P onClick={SearchHandler}>WOMEN</P>
      <P>|</P>
      <p onClick={SearchHandler2}>MEN</p>
    </Container>
  );
};
export default Sex;
