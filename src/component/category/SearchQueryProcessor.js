import React from "react";
import styled from "@emotion/styled";
import Category from "./Category";
import data from "../../mockup/Data";
const SearchQueryProcessor = ({ query, setID, setScreen, setWishingList }) => {
  let Container = styled.div`
    margin-bottom: 10vh;
    margin-top: 10vh;
  `;
  let ProcessedData = data.filter(
    (d) =>
      d.name.includes(query) ||
      d.description.includes(query) ||
      d.brand.includes(query)
  );

  let num = ProcessedData.length;
  let row = Math.ceil(num / 8);

  let array = Array.from(Array(row).keys());

  return (
    <Container>
      {array.length === 0
        ? "Hey, No Result Found For This Search, Please Try Again :)"
        : ""}
      {array.map((i) => {
        return (
          <Category
            key={i}
            num1="0"
            num2="8"
            dataSet={
              num - i * 8 >= 8
                ? ProcessedData.slice(i * 8, i * 8 + 8)
                : ProcessedData.slice(i * 8, num)
            }
            setID={setID}
            setScreen={setScreen}
            setWishingList={setWishingList}
          />
        );
      })}
    </Container>
  );
};
export default SearchQueryProcessor;
