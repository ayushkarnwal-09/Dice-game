import React from "react";
import "./RollDice.css";
import { useState } from "react";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <div className="rolldiceDiv">
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;
