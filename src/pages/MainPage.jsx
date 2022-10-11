import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProductsContainer from "../components/ProductContainer/ProductsContainer";

function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Nav />
      <ProductsContainer />
      <Footer />
    </div>
  );
}

export default MainPage;
