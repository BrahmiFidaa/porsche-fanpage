
import React from "react";
import "./Hero.css";
import porscheHero from "./car.avif";

function Hero() {
  return (
    <div className="hero">
      <img src={porscheHero} alt="Porsche" className="car" />
      <div className="hero-text">
        <h1>Unleash the Beast</h1>
        <p>Drive the legend. Live the Porsche experience.</p>
      </div>
    </div>
  );
}

export default Hero;
