import React from "react";
import "./StartGame.css";

const StartGame = ({ toggle }) => {
  return (
    <div className="container_1">
      <div>
        <img className="dice_image" src="./images/Dice.png" alt="Dice Image" />
      </div>
      <div className="game_text">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;
