import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Category from "./component/category/Category";
function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
