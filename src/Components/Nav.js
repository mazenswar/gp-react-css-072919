import React from "react";
import "../Stylesheets/nav.scss";

const Nav = () => (
  <nav>
    <a href="#">Home</a>
    <a href="#about-section">About</a>
    <a href="#cards-section">Cards</a>
    <h2>Glorious Pegasus</h2>
    <input className="search-input" type="text" placeholder="Search..." />
  </nav>
);

export default Nav;
