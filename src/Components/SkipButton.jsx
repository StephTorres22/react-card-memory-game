/* eslint-disable react/prop-types */

import { shuffleDeck } from "../deck";
function SkipButton({ id, getImage }) {
  return (
    <button
      type="button"
      onClick={() => {
        getImage(id);
        shuffleDeck(id);
      }}
    >
      Skip
    </button>
  );
}

export default SkipButton;
