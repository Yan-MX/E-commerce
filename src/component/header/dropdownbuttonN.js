import React from "react";
import styled from "@emotion/styled";
import { FcList } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";

const Section = () => {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isMidiumScreen = useMediaQuery({
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
    overflow: hidden;
    & > div {
      /* dropdown */
      float: left;
      overflow: hidden;
      button {
        /* drop btn */
        font-size: 16px;
        border: none;
        outline: none;
        padding: 14px 16px;
        background-color: pink;
        font-family: inherit;
        margin: 0;
      }
      :hover {
        button {
          background-color: blue;
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
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
        }
      }
    }
  `;
  let P = styled.p`
    margin-right: 30px;
  `;
  return (
    <div>
      {isBiggerScreen && (
        <Container>
          <P>
            <ins>New Arrivals</ins>
          </P>
          <P>Running</P>
          <P>Training</P>
          <P>On Sale</P>
        </Container>
      )}
      {isMidiumScreen && (
        <div>
          <Container2 className="navbar">
            <div className="dropdown">
              <button className="dropbtn">
                <FcList />
                Category
              </button>
              <div className="dropdown-content">
                <a href="#">New Arrival</a>
                <a href="#">Running</a>
                <a href="#">Training</a>
                <a href="#">On Sale</a>
              </div>
            </div>
          </Container2>
        </div>
      )}
    </div>
  );
};
export default Section;
