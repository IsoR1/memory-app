import React, { useState } from "react";

function DifficultyPrompt({ onSelect }) {
  const handleEasyClick = () => {
    onSelect("easy");
  };

  const handleHardClick = () => {
    onSelect("hard");
  };

  return (
    <div className="difficulty-container">
      <div className="difficulty-h3-buttons-div">
        <h3 className="difficulty-h3">
          Which difficulty would you like?
          <div className="difficulty-buttons">
            <button type="button" onClick={handleEasyClick}>
              Easy
            </button>
            <button type="button" onClick={handleHardClick}>
              Hard
            </button>
          </div>
        </h3>
      </div>
    </div>
  );
}

export default DifficultyPrompt;
