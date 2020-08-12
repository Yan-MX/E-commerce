import React from "react";
import Cards from "./Cards";
import Posters from "./Posters";
import styled from "@emotion/styled";
import Data from "../../mockup/MockupDataWith100Items.json";
const Category = ({ num1, num2, setScreen, setID, setWishingList }) => {
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

  let SmallContainer = styled.div`
    display: inline-block;
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
  const ClickHandler = (e) => {
    setID(e.target.id);

    setScreen(false);
  };

  return (
    <div>
      <Container>
        {data.slice(num1, num2).map((d) => (
          <SmallContainer key={d.id} id={d.id} onClick={ClickHandler}>
            <Posters
              data={d}
              bg={d.images.split(",")[0].slice(1, -1)}
              setWishingList={setWishingList}
            />
            <Cards data={d} />
          </SmallContainer>
        ))}
      </Container>
    </div>
  );
};

export default Category;
