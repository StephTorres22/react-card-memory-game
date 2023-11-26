/* eslint-disable react/prop-types */

import { returnCardsToDeck } from "../deck.js";

export function Card({
  id,
  image,
  getImage,
  incrementScore,
  checkHighScore,
  checkMap,
  code,
}) {
  return (
    <div>
      <img
        src={image}
        alt=""
        onClick={() => {
          getImage(id);
          incrementScore();
          checkHighScore();
          returnCardsToDeck(id);
          checkMap(code);
        }}
        style={{ height: "28rem", width: "17rem" }}
      />
    </div>
  );
}
