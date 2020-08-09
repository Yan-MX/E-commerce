import React from "react";
import { FcSelfie } from "react-icons/fc";
import styled from "@emotion/styled";
const MyAccount = () => {
  let Container = styled.div`
    margin-right: 20px;
    padding-top: 10px;
  `;
  return (
    <Container>
      <FcSelfie />
      <p>My Account</p>
    </Container>
  );
};
export default MyAccount;
