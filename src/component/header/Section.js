import React from "react";
import styled from "@emotion/styled";
import { FcList } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";

const Section = ({ setScreen, setQuery }) => {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });
  let Container = styled.div`
    /* navbar */
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 14px;
  `;
  let Container2 = styled.div`
    /* navbar */

    div {
      /* dropdown */
      button {
        /* drop btn */
        font-size: 16px;
        border: none;
        outline: none;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
        border-radius: 5px;
      }
      :hover {
        button {
          background-color: rgba(0, 80, 134, 0.7);
          color: white;
        }
        div {
          display: block;
        }
      }
      div {
        /* drop content */
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.6);
        z-index: 1;
        a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          background-color: white;
          display: block;
          text-align: left;
          border-bottom: 1px solid black;
        }
      }
    }
  `;
  let P = styled.p`
    margin-right: 30px;
    &:hover {
      color: rgb(0, 8, 134);
    }
  `;
  const clickHandler = (e) => {
    e.preventDefault();
    setQuery("new");
    setScreen("search");
  };
  const clickHandler2 = (e) => {
    e.preventDefault();
    setQuery("run");
    setScreen("search");
  };
  const clickHandler3 = (e) => {
    e.preventDefault();
    setQuery("train");
    setScreen("search");
  };
  const clickHandler4 = (e) => {
    e.preventDefault();
    setQuery("slipper");
    setScreen("search");
  };
  return (
    <div>
      {isBiggerScreen && (
        <Container>
          <P onClick={clickHandler}>
            <ins>New Arrivals</ins>
          </P>
          <P onClick={clickHandler2}>Running</P>
          <P onClick={clickHandler3}>Training</P>
          <P onClick={clickHandler4}>In Season</P>
        </Container>
      )}
      {isMediumScreen && (
        <div>
          <Container2 className="navbar">
            <div className="dropdown">
              <button className="dropbtn">
                <FcList />
                Category
              </button>
              <div className="dropdown-content">
                <a href="#section" onClick={clickHandler}>
                  New Arrival
                </a>
                <a href="#section" onClick={clickHandler2}>
                  Running
                </a>
                <a href="#section" onClick={clickHandler3}>
                  Training
                </a>
                <a href="#section" onClick={clickHandler4}>
                  In Season
                </a>
              </div>
            </div>
          </Container2>
        </div>
      )}
    </div>
  );
};
export default Section;
