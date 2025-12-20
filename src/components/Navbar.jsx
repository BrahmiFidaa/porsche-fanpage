import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Porsche Logo" className="logo" />
    </nav>
  );
}

export default Navbar;
