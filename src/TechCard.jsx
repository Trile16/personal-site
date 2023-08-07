import React from "react";
import "./TechCard.css";

const TechCard = ({ imgSrc, name }) => {
  return (
    <div className="tech-card">
      <img src={imgSrc} alt={name} className="tech-img" />
      <p className="tech-name">{name}</p>
    </div>
  );
};

export default TechCard;
