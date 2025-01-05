import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [dynamicText, setDynamicText] = useState("Props");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let timeout;

    const updateText = () => {
      // Determine the new text based on the route
      switch (location.pathname) {
        case "/masks":
          return "Mask";
        case "/helmets":
          return "Helmets";
        case "/sculptures":
          return "Sculptures";
        default:
          return "Props";
      }
    };

    const newText = updateText();

    // Animate text out
    setAnimationClass("spin-out");

    // Wait for the animation to complete, then update text and animate in
    timeout = setTimeout(() => {
      setDynamicText(newText);
      setAnimationClass("spin-in");

      // Revert to "Props" after 2 seconds
      setTimeout(() => {
        setAnimationClass("spin-out");
        setTimeout(() => {
          setDynamicText("Props");
          setAnimationClass("spin-in");
        }, 500); // Match the animation duration
      }, 2000);
    }, 500);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location]);

  return (
    <header className="header">
      <h1>Ezekiel Owens</h1>
      <h2>
        <span className={`dynamic-text ${animationClass}`}>{dynamicText}</span>{" "}
        <span className="static-text">Maker</span>
      </h2>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All
        </NavLink>
        <NavLink
          to="/masks"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Masks
        </NavLink>
        <NavLink
          to="/helmets"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Helmets
        </NavLink>
        <NavLink
          to="/sculptures"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sculptures
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
