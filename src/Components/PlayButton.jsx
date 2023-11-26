/* eslint-disable react/prop-types */
function PlayButton({ id, getImage, setGameOn }) {
  return (
    <button
      type="button"
      onClick={() => {
        getImage(id);
        setGameOn();
      }}
    >
      Play
    </button>
  );
}

export default PlayButton;
