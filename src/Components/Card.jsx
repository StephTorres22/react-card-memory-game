/* eslint-disable react/prop-types */

import { shuffleDeck } from "../deck.js";

export function Card({ id, image, getImage, incrementScore, checkHighScore }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        onClick={() => {
          getImage(id);
          incrementScore();
          checkHighScore();
          shuffleDeck(id);
        }}
        style={{ height: "28rem", width: "17rem" }}
      />
    </div>
  );
}
