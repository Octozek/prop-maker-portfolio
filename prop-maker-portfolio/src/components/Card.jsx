import React from "react";
import "./Card.css";

const Card = ({ image, title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
