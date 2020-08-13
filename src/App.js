import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import MiddleSection from "./component/category/MiddleSection";
import Giftcard from "./component/footer/Giftcard";
import ProductInfo from "./component/product/productInfo";
import ScrollToTop from "react-scroll-to-top";
import Wish from "./component/Personal/Wish";
import Cart from "./component/Personal/Cart";
import SearchQueryProcessor from "./component/category/SearchQueryProcessor";
function App() {
  const [screen, setScreen] = useState("main");
  const [id, setID] = useState("");
  const [WishingList, setWishingList] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const show = () => {
    console.log("set screen to ", screen);
    switch (screen) {
      case "main":
        return (
          <div>
            <MiddleSection
              setScreen={setScreen}
              setID={setID}
              setWishingList={setWishingList}
            />
          </div>
        );
      case "product":
        return (
          <div>
            <ProductInfo
              id={id}
              setWishingList={setWishingList}
              WishingList={WishingList}
              cart={cart}
              setCart={setCart}
            />
          </div>
        );
      case "wish":
        return (
          <div>
            <Wish
              WishingList={WishingList}
              setID={setID}
              setScreen={setScreen}
            />
          </div>
        );
      case "cart":
        return (
          <div>
            <Cart cart={cart} setID={setID} setScreen={setScreen} />
          </div>
        );
      case "search":
        return (
          <SearchQueryProcessor
            query={query}
            setID={setID}
            setScreen={setScreen}
            setWishingList={setWishingList}
          />
        );
      default:
        return <p>hahah</p>;
    }
  };
  return (
    <div className="App">
      <ScrollToTop smooth color="salmon" />
      <Header setScreen={setScreen} setQuery={setQuery} />
      {show()}
      <Giftcard />
      <Footer />
    </div>
  );
}

export default App;
