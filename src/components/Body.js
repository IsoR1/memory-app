import React, { useEffect, useState } from "react";
import banner from "../bg_image/targaryen-banner.svg";

function Body({ difficulty, images, flip }) {
  if (!images) {
    return null;
  }

  return (
    <div className="card-container">
      {images.map((img) => (
        <div className={`card ${flip ? "flip" : ""}`} data-id={img.id}>
          <div className="card-front">
            <img src={img.path.default} className="image" alt={img.name} />
            <span className="img-span">
              <strong className="img-strong">{img.name}</strong>
            </span>
          </div>
          <div className="card-back">
            <img src={banner} className="back-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
