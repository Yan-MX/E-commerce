import React from "react";
import Cards from "./Cards";
import Posters from "./Posters";
import styled from "@emotion/styled";
import data from "../../mockup/Data";
const Category = ({
  num1,
  num2,
  dataSet,
  setScreen,
  setID,
  setWishingList,
}) => {
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

  const ClickHandler = (e) => {
    setID(e.target.id);

    setScreen("product");
  };
  let dataProcess = [];
  if (dataSet === "") {
    dataProcess = data.slice(num1, num2);
  } else {
    console.log(("dataSet here", dataSet));
    dataProcess = dataSet;
  }

  return (
    <div>
      <Container>
        {dataProcess.map((d) => (
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
