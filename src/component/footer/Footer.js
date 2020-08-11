import React from "react";

import Contact from "./Contact";
import styled from "@emotion/styled";

const Footer = () => {
  let Container = styled.div`
    background-image: linear-gradient(
      to bottom left,
      rgba(0, 80, 134, 0.9),
      black
    );
    padding-bottom: 50px;
  `;
  let P = styled.p`
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 1px rgba(255, 255, 255, 0.1);
  `;
  return (
    <div>
      <Container>
        <Contact />
        <P>© Copyright 2020 Yan. All rights reserved.</P>
      </Container>
    </div>
  );
};

export default Footer;
