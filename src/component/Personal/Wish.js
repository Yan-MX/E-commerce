import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import Data from "../../mockup/Data";
const Wish = ({ WishingList, setID, setScreen }) => {
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "row";
  const b = "column";

  let Container = styled.div`
    display: flex;
    flex-direction: ${isMediumScreen ? a : b};
    height: 35vh;
    width: 70%;
    margin: auto;
    border: 1px solid grey;
    background-color: rgba(0, 80, 134, 0.2);
    border-radius: 5px;
    align-self: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
  `;
  let P = styled.p`
    font-size: 1.2vw;
    text-transform: uppercase;
    font-weight: bold;
  `;
  let P1 = styled.p`
    font-size: 1vw;
    text-decoration: line-through;
  `;
  let P2 = styled.p`
    font-size: 1vw;
    color: salmon;
    text-align: left;
  `;
  let Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  `;
  let Div2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  `;
  let Img = styled.img`
    margin: 5vw;
    width: 30%;
    height: 50%;
    border-radius: 5px;
    border: 1px dotted grey;
  `;

  let array1 = [];
  const render = () => {
    if (WishingList.length === 0) {
      return <p>Your wishing list is still empty</p>;
    } else {
      WishingList.map((item) => {
        array1.push(Data.filter((data) => data.id === item)[0]);
        return array1;
      });
    }
  };
  const ClickHandler = (e) => {
    setID(e.target.id);
    setScreen("product");
  };
  return (
    <div>
      {render()}
      {array1.map((data) => (
        <Container onClick={ClickHandler} id={data.id}>
          <Img id={data.id} src={data.images.split(",")[0].slice(1, -1)} />
          <Div2 id={data.id}>
            <P id={data.id}>{data.name}</P>
            <Div id={data.id}>
              <P1 id={data.id}>{data.listprice},kr</P1>{" "}
              <P2 id={data.id}>-{data.discount}%</P2>
            </Div>
            <P2 id={data.id}>{data.saleprice}Kr</P2>
          </Div2>
        </Container>
      ))}
    </div>
  );
};

export default Wish;
