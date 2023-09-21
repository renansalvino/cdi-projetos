// FlyingEmoji.js
import React from "react";
import "./FlyingPenguin.css"; 

const FlyingPenguin = ({ flying }) => {
  return <div className={flying ? "emoji flying" : "emoji"}>🐧</div>;
};

export default FlyingPenguin;
