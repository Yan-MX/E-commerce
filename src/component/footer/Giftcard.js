import React from "react";
import styled from "@emotion/styled";
import bg1 from "../../mockup/giftcard.png";
import { useMediaQuery } from "react-responsive";
const Giftcard = () => {
  const isMidiumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "2.5vw";
  const b = "1.5vw";
  let Img = styled.img`
    width: 100%;
    max-height: 400px;
  `;
  let Div = styled.div`
    position: relative;
    text-align: center;
    color: white;
  `;
  let H2 = styled.h2`
    position: absolute;
    top: 30%;
    left: 30%;

    transform: translate(-50%, -50%);
    color: white;
    margin-left: 50px;
    font-size: ${isMidiumScreen ? a : b};
    height: auto;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    text-transform: uppercase;
    margin-top: 30px;
  `;
  let Button = styled.button`
    position: absolute;
    width: 15vw;
    top: 75%;
    left: 30%;
    background-color: whitesmoke;
    transform: translate(-50%, -50%);
    color: rgba(0, 80, 134, 1);
    margin-left: 50px;
    font-size: 1.5vw;
    height: auto;
    text-align: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 80, 134, 0.6);
    border-radius: 5px;

    border-radius: 5px;
  `;
  return (
    <Div>
      <Img src={bg1} alt="background photo" />
      <H2>
        buy gift cards <br />& receive discount...
      </H2>
      <Button>Buy Now</Button>
    </Div>
  );
};

export default Giftcard;
