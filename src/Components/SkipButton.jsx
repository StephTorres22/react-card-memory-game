/* eslint-disable react/prop-types */

import { returnCardsToDeck } from "../deck";
function SkipButton({ id, getImage }) {
  return (
    <button
      type="button"
      onClick={() => {
        getImage(id);
        returnCardsToDeck(id);
      }}
    >
      Skip
    </button>
  );
}

export default SkipButton;
