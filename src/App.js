import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import MiddleSection from "./component/category/MiddleSection";
import Giftcard from "./component/footer/Giftcard";
import ProductInfo from "./component/product/productInfo";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [screen, setScreen] = useState(true);
  const [id, setID] = useState("");
  const [WishingList, setWishingList] = useState([]);
  const [cart, setCart] = useState(["aaa", "bbb"]);
  return (
    <div className="App">
      <ScrollToTop smooth color="salmon" />
      <Header setScreen={setScreen} />
      {screen ? (
        <div>
          <MiddleSection
            setScreen={setScreen}
            setID={setID}
            setWishingList={setWishingList}
          />
          <Giftcard />
        </div>
      ) : (
        <div>
          <ProductInfo
            id={id}
            setWishingList={setWishingList}
            WishingList={WishingList}
            cart={cart}
            setCart={setCart}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
