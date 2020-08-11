import React from "react";
import styled from "@emotion/styled";
import { FcSearch } from "react-icons/fc";
const Search = () => {
  let Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 14px;
  `;
  let Input = styled.input`
    margin-right: 10px;
    border-radius: 5px;
  `;
  return (
    <Container>
      <form>
        <Input placeholder="Search" />
        <FcSearch />
      </form>
    </Container>
  );
};
export default Search;
