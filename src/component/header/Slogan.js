import React from "react";
import { useMediaQuery } from "react-responsive";

import styled from "@emotion/styled";

function Slogan() {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 1050px)",
  });
  let Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0, 80, 134, 0.5);
  `;
  let Div = styled.div`
    text-transform: uppercase !important;
    color: whitesmoke;
    text-decoration: underline;
    margin: 20px 50px;
  `;

  return (
    <div>
      {isBiggerScreen ? (
        <>
          <Container>
            <Div>All Scandinavian Favorite Brands</Div>
            <Div className="headl1">100 days return policy</Div>
            <Div className="headl1">free shipping and returns</Div>
          </Container>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Slogan;
