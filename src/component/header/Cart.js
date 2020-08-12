import React from "react";
import { FcPaid } from "react-icons/fc";
import styled from "@emotion/styled";
const Cart = ({ setScreen }) => {
  let Container = styled.div`
    padding-top: 10px;
  `;
  const ClickHandler = (e) => {
    setScreen("cart");
  };
  return (
    <Container onClick={ClickHandler}>
      <FcPaid />
      <p>Shopping Cart</p>
    </Container>
  );
};
export default Cart;
