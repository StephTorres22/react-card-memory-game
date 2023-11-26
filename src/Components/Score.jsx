/* eslint-disable react/prop-types */
function Score({ topScore, currentScore }) {
  return (
    <div>
      <h3>Your top score: {topScore}</h3>
      <h3>Your current score: {currentScore}</h3>
    </div>
  );
}

export default Score;
