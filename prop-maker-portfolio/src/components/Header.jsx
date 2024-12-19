import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have a CSS file for the header

const Header = () => {
  return (
    <header className="header">
      <h1>Ezekiel Owens</h1>
      <h2>Props Maker</h2>
      <nav>
        <Link to="/">All</Link>
        <Link to="/masks">Masks</Link>
        <Link to="/helmets">Helmets</Link>
      </nav>
    </header>
  );
};

export default Header;
