import React, { useState } from "react";

function DifficultyPrompt({ onSelect }) {
  const handleEasyClick = () => {
    onSelect("easy");
  };

  const handleHardClick = () => {
    onSelect("hard");
  };

  return (
    <div>
      <h3>
        Which difficulty would you like?
        <button type="button" onClick={handleEasyClick}>
          Easy
        </button>
        <button type="button" onClick={handleHardClick}>
          Hard
        </button>
      </h3>
    </div>
  );
}

export default DifficultyPrompt;
