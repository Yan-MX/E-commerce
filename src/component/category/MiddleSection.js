import React from "react";
import bg1 from "../../mockup/bg1.png";
import bg2 from "../../mockup/bg2.png";
import bg3 from "../../mockup/bg3.png";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import Category from "./Category";

const MiddleSection = ({ setScreen, setID, WishingList, setWishingList }) => {
  const isMidiumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  let Div = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 80px;
  `;
  const a = "2.5vw";
  const b = "1.5vw";
  let Text1 = styled.div`
    position: absolute;
    top: 36%;
    left: 70%;
    padding: 10px;
    background-color: rgba(0, 80, 134, 0.5);
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `;
  let Img = styled.img`
    width: 100%;
    max-height: 450px;
  `;

  //console.log("image now is", 1, data[0].images.split(",")[0]);

  return (
    <div>
      <Div>
        <Img src={bg1} />
        <Text1>Empowering your marathon running</Text1>
      </Div>

      <Category
        num1="0"
        num2="8"
        dataSet=""
        setID={setID}
        setScreen={setScreen}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />

      <Div>
        <Img src={bg2} alt="background photo" />
        <Text1>Nature is pleased with simplicity</Text1>
      </Div>
      <Category
        num1="34"
        num2="42"
        dataSet=""
        setScreen={setScreen}
        setID={setID}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />
      <Category
        num1="50"
        num2="58"
        dataSet=""
        setID={setID}
        setScreen={setScreen}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />
      <Div>
        <Img src={bg3} alt="background photo" />
        <Text1>home quarantine workout</Text1>
      </Div>
      <Category
        num1="70"
        num2="78"
        dataSet=""
        setID={setID}
        setScreen={setScreen}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />
      <Category
        num1="80"
        num2="88"
        dataSet=""
        setID={setID}
        setScreen={setScreen}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />
    </div>
  );
};

export default MiddleSection;
