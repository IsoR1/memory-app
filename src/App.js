// import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./components/Header.js";
import Easy from "./components/Easy.js";
import Hard from "./components/Hard.js";
import "./App.css";
import DifficultyPrompt from "./components/DifficultyPrompt";

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    console.log("check", selectedDifficulty);
  };

  return (
    <div className="App">
      {selectedDifficulty ? (
        <>
          <Header />
          {selectedDifficulty === "easy" ? <Easy /> : <Hard />}
        </>
      ) : (
        <DifficultyPrompt onSelect={handleDifficultySelect} />
      )}
    </div>
  );
}

export default App;
