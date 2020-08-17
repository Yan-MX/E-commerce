import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import Data1 from "../../mockup/Data";
import Category from "../category/Category";
const ProductInfo = ({
  cart,
  setCart,
  id,
  setWishingList,
  WishingList,
  setID,
  setScreen,
}) => {
  const isMidiumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const [like, setLike] = useState(false);
  const a = "row";
  const b = "column";
  const a1 = "space-around";
  const b1 = "center";
  const c = "90%;";
  const d = "100%";
  let Container = styled.div`
    width: 90%;
    justify-content: ${isMidiumScreen ? a1 : b1};
    align-items: ${isMidiumScreen ? a1 : b1};
    display: flex;
    flex-direction: ${isMidiumScreen ? a : b};
  `;
  let Left = styled.div`
    width: ${isMidiumScreen ? d : c};
  `;

  let data = Data1.filter((data) => {
    return data.id === id;
  })[0];

  return typeof data !== "undefined" && data !== null ? (
    <div>
      <Container>
        <Left>
          <Carousel>
            {data.images.split(",").map((pic) => (
              <div key={pic}>
                <img src={pic.slice(1, -1)} alt="product" />
                <p className="legend"></p>
              </div>
            ))}
          </Carousel>
        </Left>
        <Left>
          <Product
            like={like}
            setLike={setLike}
            data={data}
            setWishingList={setWishingList}
            WishingList={WishingList}
            setCart={setCart}
          />
        </Left>
      </Container>
      <h4>You may also like: </h4>
      <Category
        num1={data.key > 10 ? data.key - 9 : 0}
        num2={data.key > 10 ? data.key : 9}
        dataSet=""
        setID={setID}
        setScreen={setScreen}
        WishingList={WishingList}
        setWishingList={setWishingList}
      />
    </div>
  ) : (
    <Container>No product data</Container>
  );
};
export default ProductInfo;
