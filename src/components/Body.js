import React, { useState } from "react";
import uniqid from "uniqid";
function Body({ difficulty, images, flip }) {
  if (!images) {
    return null;
  }

  return (
    <div className="card-container">
      {images.map((img) => (
        <div className="card" data-id={img.id}>
          <img src={img.path.default} className="image" alt={img.name} />
          <span className="img-span">
            <strong className="img-strong">{img.name}</strong>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Body;
