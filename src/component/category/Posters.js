import React, { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Posters = ({ bg, data, setWishingList }) => {
  const [like, setLike] = useState(false);
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const a = "300px";
  const b = "150px";
  const c = "10px";
  const d = "5px";
  let BigContainer = styled.div`
    position: relative;
  `;
  let Img = styled.img`
    margin: ${isMediumScreen ? c : d};
    height: ${isMediumScreen ? a : b};
    box-shadow: 0px 8px 16px 0px rgba(0, 80, 134, 0.2);

    display: block;
  `;
  let Container = styled.div`
    position: absolute;
    bottom: 1%;
    right: 5%;
    transform: translate(-50%, -50%);
  `;
  const ClickHandler = (e) => {
    // Fix the code later
    like
      ? setWishingList((wishinglist) =>
          wishinglist.filter((d) => !d.id === e.target.id)
        )
      : setWishingList((wishinglist) => wishinglist.push(e.target.id));
    console.log("handler a click of like");
    setLike((value) => !value);
  };
  return (
    <BigContainer>
      <Img src={bg} id={data.id} alt="Product Picture" />
      {
        <Container onClick={ClickHandler} id={data.id}>
          {like ? <FcLike id={data.id} /> : <FcLikePlaceholder id={data.id} />}
        </Container>
      }
    </BigContainer>
  );
};

export default Posters;
