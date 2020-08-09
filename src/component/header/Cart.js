import React from "react";
import { FcPaid } from "react-icons/fc";
import styled from "@emotion/styled";
const Cart = () => {
  let Container = styled.div`
    padding-top: 10px;
  `;
  return (
    <Container>
      <FcPaid />
      <p>Shopping Cart</p>
    </Container>
  );
};
export default Cart;
