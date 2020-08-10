import React from "react";
import Cards from "./Cards";
import Posters from "./Posters";
import Data from "../../mockup/MockupDataWith100Items.json";
import bg1 from "../../mockup/bg1.png";
import styled from "@emotion/styled";

const Category = () => {
  let Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    white-space: nowrap;
    margin-left: 50px;
    height: 25%;
    position: relative;
    text-align: center;
  `;
  let Div = styled.div`
    position: relative;
    text-align: center;
  `;

  let Text1 = styled.p`
    position: absolute;
    top: 50%;
    left: 70%;

    transform: translate(-50%, -50%);
    color: rgba(0, 80, 134, 0.8);
    margin-left: 50px;
    font-size: 2.3vw;
    height: auto;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    text-transform: uppercase;
    margin-top: 30px;
  `;

  let SmallContainer = styled.div`
    display: inline-block;
  `;
  let Img = styled.img`
    width: 100%;
    max-height: 400px;
  `;
  let P = styled.p`
    color: whitesmoke;
  `;
  let num = 0;
  let data = Data.map((data) => ({
    key: num++,
    name: data["Product Name"],
    id: data["Product ID"],
    listprice: data["Listing Price"],
    saleprice: data["Sale Price"],
    discount: data["Discount"],
    brand: data.Brand,
    description: data.Description,
    rating: data.Rating,
    reviews: data.Reviews,
    images: data.Images.slice(1, -1),
  }));
  console.log("image now is", 1, data[0].images.split(",")[0]);

  return (
    <div>
      <Div>
        <Img src={bg1} />

        <Text1>
          lighter & faster <br />
          <P>empowering your marathon running</P>
        </Text1>
      </Div>
      <Container>
        {data.slice(0, 8).map((d) => (
          <SmallContainer>
            <Posters bg={d.images.split(",")[0].slice(1, -1)} />
            <Cards data={d} />
          </SmallContainer>
        ))}
      </Container>
    </div>
  );
};

export default Category;
