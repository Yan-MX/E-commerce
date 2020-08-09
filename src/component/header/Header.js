import React from "react";
import Slogan from "./Slogan";
import Sex from "./Sex";
import MyAccount from "./MyAccount";
import WishingList from "./WishingList";
import Cart from "./Cart";
import Logo from "./logo5.png";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
function Header() {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isMidiumScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });
  let Screen = styled.div``;
  let Img = styled.img`
    width: 120px;
    height: 60px;
    align-items: center;
    margin-left: 18px;
    margin-top: 4px;
  `;
  let Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 50px;
  `;
  let Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <Screen>
      {isBiggerScreen && (
        <div>
          <Slogan />
          <Sections>
            <Sex />
            <Img src={Logo} alt="logo" />
            <Container>
              <MyAccount />
              <WishingList />
              <Cart />
            </Container>
          </Sections>
        </div>
      )}
      {isMidiumScreen && (
        <div>
          <Slogan />
          <Sections>
            <Sex />
            <Img src={Logo} alt="logo" />
          </Sections>
          <Container>
            <MyAccount />
            <WishingList />
            <Cart />
          </Container>
        </div>
      )}
    </Screen>
  );
}

export default Header;
