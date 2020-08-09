import React from "react";
import styled from "@emotion/styled";
const Sex = () => {
  let Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 14px;
  `;
  let P = styled.p`
    margin-right: 30px;
  `;
  return (
    <Container>
      <P>WOMEN</P>
      <P>|</P>
      <P>MEN</P>
      <P>|</P>
      <p>CHILDREN</p>
    </Container>
  );
};
export default Sex;
