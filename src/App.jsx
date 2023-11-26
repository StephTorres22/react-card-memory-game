import { useState, useEffect } from "react";
import "./App.css";
import * as deckFunction from "./deck.js";
import { Card } from "./Components/Card.jsx";
import Score from "./Components/Score.jsx";
import PlayButton from "./Components/PlayButton.jsx";

function App() {
  const [deckId, setDeckId] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(10);

  useEffect(() => {
    async function getDeckId() {
      const id = await deckFunction.getDeckID();
      setDeckId(id);
    }

    getDeckId();
  }, []);

  const [image, setImage] = useState("");

  async function getCardImage(id) {
    try {
      const card = await deckFunction.drawCard(id);
      setImage(card.cards[0].image);
    } catch (err) {
      console.log("Unable to retrieve image", err);
    }
  }

  function scoreIncrease() {
    setCurrentScore((n) => n + 1);
  }

  function compareScores() {
    if (currentScore >= highScore) {
      setHighScore((n) => n + 1);
    }
  }

  return (
    <>
      <div>
        <Score topScore={highScore} currentScore={currentScore}></Score>
        {gameOn ? (
          <Card
            id={deckId}
            image={image}
            getImage={getCardImage}
            incrementScore={scoreIncrease}
            checkHighScore={compareScores}
          ></Card>
        ) : (
          <PlayButton
            id={deckId}
            getImage={getCardImage}
            setGameOn={() => setGameOn(!gameOn)}
          ></PlayButton>
        )}
      </div>
    </>
  );
}

export default App;
