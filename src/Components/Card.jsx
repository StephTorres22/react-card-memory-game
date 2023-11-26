/* eslint-disable react/prop-types */

export function Card({ id, image, getImage, incrementScore, checkHighScore }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        onClick={() => {
          getImage(id);
          incrementScore();
          checkHighScore()
        }}
        style={{ height: "28rem", width: "17rem" }}
      />
    </div>
  );
}
