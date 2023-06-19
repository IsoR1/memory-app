import React, { useState } from "react";
import uniqid from "uniqid";
import daemonJpg from "../images/daemon-laura.jpg";
import jaehaerysJpg from "../images/jaehaerys-one-laura.jpg";
import maegorJpg from "../images/maegor-laura.jpg";
import baelorJpg from "../images/baelor-laura.jpg";

function Body({ difficulty }) {
  let images;
  if (difficulty === "easy") {
    images = [
      { name: "Daemon", path: daemonJpg },
      { name: "Jaehaerys", path: jaehaerysJpg },
      { name: "Maegor", path: maegorJpg },
      { name: "Baelor", path: baelorJpg },
    ];
  } else if (difficulty === "hard") {
    images = [{ name: "Daemon", path: daemonJpg }];
  } else if (difficulty === "hotd") {
    images = [{ name: "Baelor", path: baelorJpg }];
  }
  return (
    <div className="card-container">
      {/* <div
      className="img-cards"
      style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}
    > */}
      {images.map((img) => (
        <div className="card">
          <img src={img.path} className="image" />
          {/* <div className="card-p-div"> */}
          {/* <p className="card-p">{img.name}</p> */}
          <span style={{ alignSelf: "center" }}>{img.name}</span>
          {/* </div> */}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Body;
