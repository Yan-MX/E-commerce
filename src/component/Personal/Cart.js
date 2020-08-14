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
  const f = "70%";
  const f2 = "90%";
  let Container = styled.div`
    display: flex;
    flex-direction: ${isMediumScreen ? a : b};
    height: 35vh;
    width: ${isMediumScreen ? f : f2};
    margin: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);
    background-color: white;
    border-radius: 5px;
    justify-content: space-around;
    margin-top: 5vh;
    margin-bottom: 5vh;
    align-items: center;
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
  const a1 = "200px";
  const b1 = "120px";
  const c = "200px";
  const d = "120px";
  let Img = styled.img`
    margin: 20px;
    width: ${isMediumScreen ? c : d};
    height: ${isMediumScreen ? a1 : b1};
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);
  `;

  let array1 = [];
  const render = () => {
    if (cart.length === 0) {
      return <p>Your Shopping Cart is still empty</p>;
    } else {
      cart.map((item) => {
        let a = Data.filter((data) => data.id === item.id)[0];
        a.size = item.size;
        array1.push(a);
        return array1;
      });
    }
  };
  const ClickHandler = (e) => {
    setID(e.target.id);
    setScreen("product");
    e.preventDefault();
  };
  return (
    <div>
      {render()}
      <h4>Your Shopping Cart: </h4>
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
    </div>
  );
};

export default Cart;
