import React from "react";
import Button from "react-bootstrap/Button";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#hero"><Button type="button">Back to Top</Button></a>
      <p>
        This is a Portfolio WebSite
        <br />
        <br />
        API request on
        {" "}
        <a href="https://api.mercadolibre.com/sites/MLA/search?category=" target="_blanck">
          https://api.mercadolibre.com/sites/MLA/search?category=
        </a>
        {" "}
        and

        {" "}
        <a href="https://api.mercadolibre.com/items/" target="_blanck">
          https://api.mercadolibre.com/items/
        </a>
      </p>
    </footer>
  );
}

export default Footer;
