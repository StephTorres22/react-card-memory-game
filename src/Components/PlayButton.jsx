/* eslint-disable react/prop-types */
function PlayButton({
  id,
  getImage,
  setGameOn,
  setGameOver,
  children,
  resetMap,
  resetScore,
}) {
  return (
    <button
      type="button"
      onClick={() => {
        resetMap();

        setGameOn();
        setGameOver();
        getImage(id);
        resetScore();
      }}
    >
      {children}
    </button>
  );
}

export default PlayButton;
