import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./Header.css";
import img from "../../Images/logo.png";

function Header() {
  const history = useHistory();
  const [scroll, setScroll] = useState(true);

  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    lastScrollY = window.scrollY;
  });

  useEffect(() => {
    setScroll(false);
  }, []);

  return (
    <header className={scroll ? "header header__hidden" : "header"} data-testid="header">
      <a href="/"><img src={img} alt="logo" className="logo" /></a>
      <div>
        <h1>Athena Sports</h1>
      </div>
      <Button type="button" onClick={() => { history.push("/shopping-cart"); }} variant="outline-success">
        <h5>
          <HiShoppingCart />
          {" "}

          Shopping Cart
        </h5>

      </Button>
    </header>
  );
}

export default Header;
