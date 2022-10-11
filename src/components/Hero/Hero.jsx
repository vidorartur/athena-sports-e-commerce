import React, { useContext } from "react";
import Context from "../../context/context";
import "./Hero.css";
import imgFootball from "../../Images/football.jpg";
import imgVolley from "../../Images/volleyball.jpg";
import imgSwimming from "../../Images/swimming.jpg";
import imgSurf from "../../Images/surf.jpg";
import imgMartial from "../../Images/martialArts.jpg";
import imgCycling from "../../Images/cycling.jpg";
import imgMountaineering from "../../Images/mountaineering.jpg";

function Hero() {
  const { imgHero } = useContext(Context);

  const imgHeroChanger = () => {
    switch (imgHero) {
      case "football":
        return imgFootball;
      case "volleyball":
        return imgVolley;
      case "swimming":
        return imgSwimming;
      case "surf":
        return imgSurf;
      case "martial":
        return imgMartial;
      case "cycling":
        return imgCycling;
      case "mountaineering":
        return imgMountaineering;
      default:
        return "";
    }
  };
  return (
    <div id="hero">
      <img src={imgHeroChanger()} alt="football" className="img__hero" />
    </div>
  );
}

export default Hero;
