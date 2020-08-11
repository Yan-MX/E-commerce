import React from "react";
import { FcLike } from "react-icons/fc";
import styled from "@emotion/styled";
const WishingList = () => {
  let Container = styled.div`
    margin-right: 20px;
    padding-top: 10px;
  `;
  return (
    <Container>
      <FcLike />
      <p>Wishing List</p>
    </Container>
  );
};
export default WishingList;
