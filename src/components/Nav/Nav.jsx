import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Context from "../../context/context";
import "./Nav.css";

function Nav() {
  const { setSearch, setImgHero } = useContext(Context);

  return (
    <nav>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA1285"); setImgHero("football"); }}>Football</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA1333"); setImgHero("volleyball"); }}>Volleyball</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA1278"); setImgHero("swimming"); }}>Swimming</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA1281"); setImgHero("surf"); }}>Surf & Bodyboard</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA2480"); setImgHero("martial"); }}>Martial Arts & Boxing</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA1292"); setImgHero("cycling"); }}>Cycling</Button>
      <Button type="button" variant="dark" onClick={() => { setSearch("MLA47786"); setImgHero("mountaineering"); }}>Mountaineering & Trekking</Button>
    </nav>
  );
}

export default Nav;
