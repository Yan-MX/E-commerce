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

function Header({ setScreen }) {
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
  let ImgSmall = styled.img`
    width: 30px;
    height: 30px;
    align-items: center;
    margin-left: 8px;
    margin-top: 10px;
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
  const ClickHandler = (e) => {
    setScreen("main");
  };

  return (
    <Screen>
      {isBiggerScreen && (
        <div>
          <Slogan />
          <Sections>
            <Sex />
            <Img src={Logo} alt="logo" onClick={ClickHandler} />
            <Container>
              <MyAccount setScreen={setScreen} />
              <WishingList setScreen={setScreen} />
              <Cart setScreen={setScreen} />
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
            <ImgSmall src={Logo} alt="logo" onClick={ClickHandler} />
          </Sections2>
          <Sections2>
            <MyAccount setScreen={setScreen} />
            <WishingList setScreen={setScreen} />
            <Cart setScreen={setScreen} />
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
