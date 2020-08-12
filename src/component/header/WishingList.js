import React from "react";
import { FcLike } from "react-icons/fc";
import styled from "@emotion/styled";
const WishingList = ({ setScreen }) => {
  let Container = styled.div`
    margin-right: 20px;
    padding-top: 10px;
  `;
  const ClickHandler = (e) => {
    setScreen("wish");
  };
  return (
    <Container onClick={ClickHandler}>
      <FcLike />
      <p>Wishing List</p>
    </Container>
  );
};
export default WishingList;
