import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const Search = ({ setScreen, setQuery }) => {
  const [input, setInput] = useState("");

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
  let Button = styled.button`
    background-color: rgba(0, 80, 134, 1);
    color: white;
    border-radius: 5px;
    &:hover {
      color: salmon;
      background-color: white;
    }
  `;
  const handlerSearch = (e) => {
    e.preventDefault();
    console.log("change handled");

    setQuery(input);
    setInput("");
    setScreen("search");
  };

  const handlerChange = (e) => {
    setInput(e.target.value);
  };
  const inputRef = useRef(null); //prevent input lose focus
  useEffect(() => {
    if ((inputRef === null) | (inputRef.current === null)) {
      console.log("null");
    } else {
      inputRef.current.focus();
    }
  }, [input]);
  return (
    <Container>
      <form onSubmit={handlerSearch}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Item to search"
          value={input}
          onChange={handlerChange}
        />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};
export default Search;
