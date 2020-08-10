import React from "react";
import Slogan from "./Slogan";
import Sex from "./Sex";
import MyAccount from "./MyAccount";
import WishingList from "./WishingList";
import Cart from "./Cart";
import Logo from "./pomeranian.png";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import Search from "./Search";
import Section from "./Section";

function Header() {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isMidiumScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });
  let Screen = styled.div``;
  let Img = styled.img`
    width: 60px;
    height: 60px;
    align-items: center;
    margin-left: 18px;
    margin-top: 14px;
  `;
  let Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 50px;
    padding: 0;
  `;
  let Sections2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 60px;
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
          <Sections>
            <Section />
            <Search />
          </Sections>
        </div>
      )}
      {isMidiumScreen && (
        <div>
          <Slogan />
          <Sections2>
            <Sex />
            <Img src={Logo} alt="logo" />
          </Sections2>
          <Sections2>
            <MyAccount />
            <WishingList />
            <Cart />
          </Sections2>
          <Sections2>
            <Section />
            <Search />
          </Sections2>
        </div>
      )}
    </Screen>
  );
}

export default Header;
