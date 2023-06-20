import React, { useState } from "react";

function Header({ score, highScore }) {
  return (
    <div id="header">
      <div className="header-left">
        <h1>Targaryen Memory Game</h1>
        <p>Don't click on the same image twice!</p>
      </div>
      <div className="header-right">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default Header;
