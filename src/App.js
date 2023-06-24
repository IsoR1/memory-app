/* eslint-disable no-unused-expressions */
// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import "./App.css";
import DifficultyPrompt from "./components/DifficultyPrompt";

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
      if (!targetedButton.closest(".difficulty-buttons-div")) {
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
      console.log(selectedDifficulty);
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
          {
            name: "Rhaena",
            path: await import("./image_cards/rhaena-daughter-of-daemon.jpg"),
          },
          {
            name: "Rhaena",
            path: await import("./image_cards/rhaena-septa.jpg"),
          },
          {
            name: "Rhaenys",
            path: await import("./image_cards/rhaenys-queen.jpg"),
          },
          {
            name: "Rhaenys",
            path: await import("./image_cards/rhaenys-daughter-of-aemon.jpg"),
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
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [score, highScore]);

  useEffect(() => {
    if (images) {
      let newImgArray = [...images];
      newImgArray = newImgArray.sort(() => Math.random() - 0.5);
      setImages(newImgArray);
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
