import React, { useState } from "react";

function DifficultyPrompt() {
  return (
    <div className="difficulty-container">
      <div className="difficulty-h3-buttons-div">
        <h3 className="difficulty-h3">
          Select your difficulty
          <div className="difficulty-buttons-div">
            <button
              type="button"
              data-difficulty="easy"
              className="difficulty-button"
            >
              Easy
            </button>
            <button
              type="button"
              data-difficulty="hotd"
              className="difficulty-button"
            >
              HOTD
            </button>
            <button
              type="button"
              data-difficulty="hard"
              className="difficulty-button"
            >
              Hard
            </button>
          </div>
        </h3>
      </div>
    </div>
  );
}

export default DifficultyPrompt;
