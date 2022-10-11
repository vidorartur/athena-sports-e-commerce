import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MercadoLivreFetch from "./components/FetchAPI/MercadoLivreFetch";
import Provider from "./context/provider";
import MainPage from "./pages/MainPage";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider>
          <Route path="/" exact component={MainPage} />
          <Route path="/shopping-cart" exact component={ShoppingCart} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <MercadoLivreFetch />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
