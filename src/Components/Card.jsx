/* eslint-disable react/prop-types */
import * as deckFunction from "../deck.js";
import { useState } from "react";

export function Card({ id }) {
  const [image, setImage] = useState("");

  async function getCardImage(id) {
    try {
      const card = await deckFunction.drawCard(id);
      setImage(card.cards[0].images.svg);
    } catch (err) {
      console.log("Unable to retrieve image", err);
    }
  }

  return (
    <div>
      <img
        src={image}
        alt=""
        onClick={() => getCardImage(id)}
        style={{ height: "70rem", width: "40rem" }}
      />
    </div>
  );
}
