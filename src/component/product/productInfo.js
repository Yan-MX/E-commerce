import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import Data1 from "../../mockup/Data";
const ProductInfo = ({ cart, setCart, id, setWishingList, WishingList }) => {
  const isMidiumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const [like, setLike] = useState(false);
  const a = "row";
  const b = "column";
  const c = "50%;";
  const d = "100%";
  let Container = styled.div`
    margin: 100px;
    width: 90%;
    justify-content: space-between;
    display: flex;
    flex-direction: ${isMidiumScreen ? a : b};
  `;
  let Left = styled.div`
    width: ${isMidiumScreen ? d : c};
  `;

  let data = Data1.filter((data) => {
    return data.id === id;
  })[0];
  console.log(id);
  return (
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
  );
};
export default ProductInfo;
