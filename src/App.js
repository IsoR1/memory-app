// import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./components/Header.js";
import Easy from "./components/Easy.js";
import Hard from "./components/Hard.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import "./App.css";
import DifficultyPrompt from "./components/DifficultyPrompt";

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className="container">
      {selectedDifficulty ? (
        <>
          <Header />
          {/* {selectedDifficulty === "easy" ? <Easy /> : <Hard />} */}
          {selectedDifficulty === "easy" ? (
            <Body difficulty="easy" />
          ) : selectedDifficulty === "hard" ? (
            <Body difficulty="hard" />
          ) : selectedDifficulty === "hotd" ? (
            <Body difficulty="hotd" />
          ) : null}
          <Footer />
        </>
      ) : (
        <DifficultyPrompt onSelect={handleDifficultySelect} />
      )}
    </div>
  );
}

export default App;
