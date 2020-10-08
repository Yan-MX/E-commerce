import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import Data from "../../mockup/Data";
const Cart = ({ cart, setID, setScreen }) => {
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "row";
  const b = "column";
  const f = "50%";
  const f2 = "100%";
  let ContainerB = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: ${isMediumScreen ? f : f2};
    margin: auto;
    border-radius: 5px;
    justify-content: space-around;
    margin-top: 5vw;
    margin-bottom: 5vw;
    align-items: center;
  `;
  let Container = styled.div`
    display: flex;
    flex-direction: ${isMediumScreen ? a : b};
    width: ${isMediumScreen ? f2 : f};
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);
    background-color: white;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
    margin: 1vw 0;
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
  const a1 = "15vw";
  const b1 = "30vw";

  let Img = styled.img`
    width: ${isMediumScreen ? a1 : b1};
    height: ${isMediumScreen ? a1 : b1};
  `;
  let piece = 0;
  let sum = 0;
  let save = 0;
  let array1 = [];
  const render = () => {
    if (cart.length === 0) {
      return <p>Your Shopping Cart is still empty</p>;
    } else {
      cart.map((item) => {
        let a = Data.filter((data) => data.id === item.id)[0];
        a.size = item.size;
        array1.push(a);
        sum += a.saleprice;
        save += a.listprice - a.saleprice;
        return array1;
      });
      piece = array1.length;
    }
  };
  let Div3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;
  const ClickHandler = (e) => {
    setID(e.target.id);
    setScreen("product");
    e.preventDefault();
  };
  return (
    <ContainerB>
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
            <P2 id={data.id}>Chosen Size: {data.size}</P2>
          </Div2>
        </Container>
      ))}
      <Div3>
        <p> You will save {save} Kr </p>
        <p>
          Pieces: {piece} | Sum: {sum} kr
        </p>
      </Div3>
      <h4>Your Shopping Cart: </h4>
    </ContainerB>
  );
};
export default Cart;
