/* eslint-disable no-unused-expressions */
// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import "./App.css";
import DifficultyPrompt from "./components/DifficultyPrompt";
// Easy Images //
// import maegorJpg from "./image_cards/maegor.jpg";
// import jaehaerysJpg from "./image_cards/jaehaerys-i.jpg";
// import baelorJpg from "./image_cards/baelor.jpg";
// import maegelleJpg from "./image_cards/maegelle.jpg";
// // HOTD Images/
// import viserysIJpg from "./image_cards/viserys-i.jpg";
// import rhaenyraJpg from "./image_cards/rhaenyra-quartered.jpg";
// import aegonIIJpg from "./image_cards/aegon-ii-greens-bg.jpg";
// import aemondJpg from "./image_cards/aemond.jpg";
// import daemonJpg from "./image_cards/daemon.jpg";
// import harwinJpg from "./image_cards/harwin-strong.jpg";
// import rhaenysJpg from "./image_cards/rhaenys-daughter-of-aemon.jpg";
// import laenorJpg from "./image_cards/laenor.jpg";
// import laenaJpg from "./image_cards/laena.jpg";
// import jacaerysJpg from "./image_cards/jacaerys.jpg";
// import lucerysJpg from "./image_cards/lucerys-son-of-rhaenyra.jpg";
// import jofferyJpg from "./image_cards/joffery-son-of-rhaenyra.jpg";
// // Hard Images //
// import aegonIJpg from "./image_cards/aegon-i.jpg";
// import aegonIIIJpg from "./image_cards/aegon-iii.jpg";
// import aegonUncrownedJpg from "./image_cards/aegon-uncrowned.jpg";
// import alysHarrowayJpg from "./image_cards/alys-harroway.jpg";
// import alysRiversJpg from "./image_cards/alys-rivers.jpg";
// import alyssaJpg from "./image_cards/alyssa.jpg";
// import alyssaVelaryonJpg from "./image_cards/alyssa-velaryon.jpg";

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [moves, setMoves] = useState([]);
  const [images, setImages] = useState([]);
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  useEffect(() => {
    const difficultyButtonClick = (e) => {
      const targetedButton = e.target;
      if (!targetedButton.closest(".difficulty-buttons")) {
        e.stopPropagation();
        return;
      }
      if (targetedButton.dataset.difficulty === "easy") {
        setSelectedDifficulty("easy");
      } else if (targetedButton.dataset.difficulty === "hotd") {
        setSelectedDifficulty("hotd");
      } else if (targetedButton.dataset.difficulty === "random") {
        setSelectedDifficulty("random");
      } else if (targetedButton.dataset.difficulty === "hard") {
        setSelectedDifficulty("hard");
      }
    };

    document.addEventListener("click", difficultyButtonClick);
    return () => {
      document.removeEventListener("click", difficultyButtonClick);
    };
  }, [selectedDifficulty]);

  useEffect(() => {
    const fetchImages = async () => {
      let newImages;
      if (selectedDifficulty === "easy") {
        newImages = [
          {
            name: "Jaehaerys",
            path: await import("./image_cards/jaehaerys-i.jpg"),
          },
          { name: "Maegor", path: await import("./image_cards/maegor.jpg") },
          { name: "Baelor", path: await import("./image_cards/baelor.jpg") },
          {
            name: "Maegelle",
            path: await import("./image_cards/maegelle.jpg"),
          },
        ];
      } else if (selectedDifficulty === "hotd") {
        newImages = [
          {
            name: "Viserys",
            path: await import("./image_cards/viserys-i.jpg"),
          },
          {
            name: "Rhaenyra",
            path: await import("./image_cards/rhaenyra-quartered.jpg"),
          },
          {
            name: "Aegon II",
            path: await import("./image_cards/aegon-ii-greens-bg.jpg"),
          },
          {
            name: "Aemond",
            path: await import("./image_cards/aemond.jpg"),
          },
          { name: "Daemon", path: await import("./image_cards/daemon.jpg") },
          {
            name: "Harwin",
            path: await import("./image_cards/harwin-strong.jpg"),
          },
          {
            name: "Rhaenys",
            path: await import("./image_cards/rhaenys-daughter-of-aemon.jpg"),
          },
          { name: "Laenor", path: await import("./image_cards/laenor.jpg") },
          { name: "Laena", path: await import("./image_cards/laena.jpg") },
          {
            name: "Jacaerys",
            path: await import("./image_cards/jacaerys.jpg"),
          },
          {
            name: "Lucerys",
            path: await import("./image_cards/lucerys-son-of-rhaenyra.jpg"),
          },
          {
            name: "Joffery",
            path: await import("./image_cards/joffery-son-of-rhaenyra.jpg"),
          },
        ];
      } else if (selectedDifficulty === "hard") {
        newImages = [
          {
            name: "Aegon",
            path: await import("./image_cards/aegon-i.jpg"),
          },
          {
            name: "Aegon",
            path: await import("./image_cards/aegon-ii-normal-bg.jpg"),
          },
          {
            name: "Aegon",
            path: await import("./image_cards/aegon-iii.jpg"),
          },
          {
            name: "Aegon",
            path: await import("./image_cards/aegon-uncrowned.jpg"),
          },
          {
            name: "Alys",
            path: await import("./image_cards/alys-harroway.jpg"),
          },
          {
            name: "Alys",
            path: await import("./image_cards/alys-rivers.jpg"),
          },
          {
            name: "Alyssa",
            path: await import("./image_cards/alyssa.jpg"),
          },
          {
            name: "Alyssa",
            path: await import("./image_cards/alyssa-velaryon.jpg"),
          },
        ];
      }

      if (newImages) {
        newImages = newImages.map((image, ind) => ({
          ...image,
          id: ind + 1,
        }));
      }

      setImages(newImages);
    };
    fetchImages();
  }, [selectedDifficulty]);

  useEffect(() => {
    const gameOver = () => {
      setMoves([]);
      setScore(0);
      return;
    };
    const gameWon = () => {
      console.log("won!");
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
      setMoves([...moves, targetedNode.dataset.id]);
      setScore(score + 1);

      if (score + 1 >= highScore) {
        setHighScore(score + 1);
      }

      console.log("length", images.length);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [score, highScore]);

  useEffect(() => {
    if (images) {
      let newImgArray = [...images];
      console.log("before sort", newImgArray);
      newImgArray = newImgArray.sort(() => Math.random() - 0.5);
      console.log("after, sort: ", newImgArray);
      setImages(newImgArray);
      console.log(images);
      console.log("these are the moves: ", moves);
    }
  }, [moves]);

  useEffect(() => {
    const gameWon = () => {
      console.log("won");
    };

    if (images && score === images.length && images.length > 0) {
      gameWon();
    }
  }, [score, images]);

  return (
    <div className="container">
      {selectedDifficulty ? (
        <>
          <Header score={score} highScore={highScore} />
          <Body difficulty={selectedDifficulty} images={images} />
          <Footer />
        </>
      ) : (
        <DifficultyPrompt onSelect={handleDifficultySelect} />
      )}
    </div>
  );
}

export default App;
