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

  const checkIfHighScore = () => {
    if (score > highScore) {
      return true;
    }
  };

  useEffect(() => {
    let targetedNode;
    const handleClick = (e) => {
      const targetedNode = e.target.closest(".card");
      if (!targetedNode) {
        return;
      }
      console.log(targetedNode);
      setScore(score + 1);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [score]);

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
