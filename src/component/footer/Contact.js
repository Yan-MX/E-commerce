import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
const Contacts = () => {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const row = "row";
  const column = "column";
  let BigContainer = styled.div`
    display: flex;
    flex-direction: ${isBiggerScreen ? row : column};

    justify-content: space-around;
    padding: 100px;
  `;
  let Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    padding-left: 30px;
    border-left: 6px solid rgba(0, 80, 134);
    height: 180px;
  `;
  let Alink = styled.a`
    color: white;
    font-size: 2.4vh;
  `;
  let P = styled.div`
    font-weight: bold;
    font-size: 2.6vh;
    color: whitesmoke;
  `;
  return (
    <BigContainer>
      <Container>
        <P>Questions and Answers</P>
        <Alink href="#Contacts">Payment</Alink>
        <Alink href="#Contacts">Return Policy</Alink>
        <Alink href="#Contacts">Invoice Payment</Alink>
        <Alink href="#Contacts">Shipping and Delivery</Alink>
      </Container>
      <Container>
        <P>Giftcards</P>
        <Alink href="#Contacts">Questions about Giftcards</Alink>
        <Alink href="#Contacts">Redemption of Giftxards</Alink>
        <Alink href="#Contacts">Questions About Discount Codes</Alink>
        <Alink href="#Contacts">Gift Certificates for Companies</Alink>
      </Container>
      <Container>
        <P>Contacts and Others</P>
        <Alink href="#Contacts">Address</Alink>
        <Alink href="#Contacts">Email</Alink>
        <Alink href="#Contacts">General Terms and Condition</Alink>
        <Alink href="#Contacts">Data Privacy</Alink>
      </Container>
    </BigContainer>
  );
};

export default Contacts;
