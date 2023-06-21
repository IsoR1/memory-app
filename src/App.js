/* eslint-disable no-unused-expressions */
// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Easy from "./components/Easy.js";
import Hard from "./components/Hard.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import "./App.css";
import DifficultyPrompt from "./components/DifficultyPrompt";

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [moves, setMoves] = useState([]);
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  useEffect(() => {
    const gameOver = () => {
      setMoves([]);
      setScore(0);
      console.log(moves);
      return;
    };
    let targetedNode;
    const handleClick = (e) => {
      const targetedNode = e.target.closest(".card");
      if (!targetedNode) {
        return;
      }
      if (moves.includes(targetedNode.dataset.id)) {
        gameOver();
        return;
      }
      console.log(targetedNode);
      setMoves([...moves, targetedNode.dataset.id]);
      setScore(score + 1);
      console.log(moves);

      // score >= highScore ? setHighScore(score + 1) : false;
      if (score + 1 >= highScore) {
        setHighScore(score + 1);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [score, highScore]);

  return (
    <div className="container">
      {selectedDifficulty ? (
        <>
          <Header score={score} highScore={highScore} />
          <Body difficulty={selectedDifficulty} />
          <Footer />
        </>
      ) : (
        <DifficultyPrompt onSelect={handleDifficultySelect} />
      )}
    </div>
  );
}

export default App;
