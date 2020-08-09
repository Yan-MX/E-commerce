import React from "react";
import { useMediaQuery } from "react-responsive";
import "../../index.css";
function Slogan() {
  const isBiggerScreen = useMediaQuery({
    query: "(min-width: 1050px)",
  });

  return (
    <div>
      {isBiggerScreen ? (
        <>
          <div className="headl1s">
            <div className="headl1">All Scandinavian Favorite Brands</div>
            <div className="headl1">100 days return policy</div>
            <div className="headl1">free shipping and returns</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Slogan;
