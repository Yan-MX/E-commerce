import React, { useState } from "react";
import styled from "@emotion/styled";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IconContext } from "react-icons";

const Product = ({
  cart,
  setCart,
  data,
  setWishingList,
  WishingList,
  like,
  setLike,
}) => {
  const [size, setSize] = useState("");
  let SContainer = styled.div`
    margin-left: 5vw;
  `;
  let Container = styled.div`
    margin-top: 100px;
    width: 100%;
    text-align: left;
  `;
  let Bg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ebeef2;
    border-radius: 5px;
    align-items: center;
  `;
  let P = styled.p`
    font-size: 2vw;
    text-transform: uppercase;
    font-weight: bold;
  `;
  let P1 = styled.p`
    font-size: 1vw;
    text-decoration: line-through;
  `;
  let P2 = styled.p`
    font-size: 1.5vw;
    color: salmon;
  `;
  let Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  `;

  let Div2 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin: 20px;
    position: relative;
  `;
  let Select = styled.select`
    width: 16vw;
    text-align: center;
    border: 1px solid rgba(0, 80, 134, 0.7);
    border-radius: 5px;
    height: 6vh;
  `;

  let Option = styled.option`
    text-align: center;
    color: whitesmoke;
  `;

  let Button = styled.input`
    width: 18vw;
    background-color: rgb(0, 80, 134);
    color: whitesmoke;
    font-size: 2vh;
    border-radius: 5px;
    height: 6vh;
  `;
  // const addToCart = () => {
  //   console.log("added to cart");
  //   setCart((cart) => cart.concat({ id: data.id, size: size }));
  //   console.log(cart);
  // };
  const ClickHandler = () => {
    setLike((a) => !a);
    if (like) {
      setWishingList((wishinglist) => wishinglist.filter((d) => d !== data.id));
    } else {
      setWishingList((wishinglist) => wishinglist.concat(data.id));
    }
    console.log(WishingList);
  };
  const handleChange = (e) => {
    setSize(e.target.value);
    console.log("size is changed", size);
  };

  return (
    <Container>
      <P>{data.name}</P>
      <p>
        [{data.brand}] {data.description}
      </p>
      <Div>
        <P1>{data.listprice},kr</P1> <P2>-{data.discount}%</P2>
      </Div>
      <P2>{data.saleprice}Kr</P2>
      <Bg>
        <Div2>
          <form>
            <Select>
              <Option value="0">Choose Size</Option>
              <Option value="36">36</Option>
              <Option value="37">37</Option>
              <Option value="38">38</Option>
              <Option value="39">39</Option>
              <Option value="40">40</Option>
              <Option value="41">41</Option>
            </Select>
          </form>
        </Div2>
        <Div2>
          <Button>Add to Cart</Button>
          <SContainer onClick={ClickHandler}>
            <IconContext.Provider value={{ size: "3em" }}>
              {like ? <FcLike /> : <FcLikePlaceholder />}
            </IconContext.Provider>
          </SContainer>
        </Div2>
      </Bg>
    </Container>
  );
};
export default Product;
