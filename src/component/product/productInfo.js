import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import Data1 from "../../mockup/Data";
const ProductInfo = ({ id }) => {
  const isMidiumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "row";
  const b = "column";
  let Container = styled.div`
    margin: 100px;
    width: 90%;
    justify-content: space-between;
    display: flex;
    flex-direction: ${isMidiumScreen ? a : b};
  `;
  let Left = styled.div`
    width: 50%;
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
              <img src={pic.slice(1, -1)} />
              <p className="legend"></p>
            </div>
          ))}
        </Carousel>
      </Left>
      <Left>
        <Product data={data} />
      </Left>
    </Container>
  );
};
export default ProductInfo;
