import React, { useState } from "react";

function DifficultyPrompt() {
  return (
    <div className="difficulty-container">
      <div className="difficulty-h3-buttons-div">
        <h3 className="difficulty-h3">
          Select your difficulty
          <div className="difficulty-buttons">
            <button type="button" data-difficulty="easy">
              Easy
            </button>
            <button type="button" data-difficulty="hotd">
              HOTD
            </button>
            <button type="button" data-difficulty="hard">
              Hard
            </button>
          </div>
        </h3>
      </div>
    </div>
  );
}

export default DifficultyPrompt;
