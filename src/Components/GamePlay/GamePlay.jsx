import { useState } from "react";
import NumberSelector from "../NumberSelector/NumberSelector";
import RollDice from "../RollDice/RollDice";
import TotalScore from "../ScoreContainer/TotalScore";
import "./GamePlay.css";
import Rules from "../Rules/Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleShowRules = (prev) => {
    setShowRules((prev) => !prev);
  };
  return (
    <>
      <div className="gamePlayDiv">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="buttons_div">
        <button onClick={resetScore}>Reset Score</button>
        <button onClick={handleShowRules}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules />}
    </>
  );
};

export default GamePlay;
