import { useState, useEffect } from "react";
import "./App.css";
import * as deckFunction from "./deck.js";
import { Card } from "./Components/Card.jsx";
import Score from "./Components/Score.jsx";
import PlayButton from "./Components/PlayButton.jsx";
import SkipButton from "./Components/SkipButton.jsx";

function App() {
  const [deckId, setDeckId] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [code, setCode] = useState("");

  const [occurences, setOccurences] = useState(new Map());

  function checkMap(key) {
    if (occurences.has(key)) {
      setOccurences((occurences) => new Map(occurences.set(key, 2)));
      setGameOver((gameOn) => !gameOn);
      return true;
    } else {
      setOccurences((occurences) => new Map(occurences.set(key, 1)));
    }
  }

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
      setCode(card.cards[0].code);
      console.log(code);
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
        <h1>Memory card game</h1>
        <h3>Don&apos;t click on the same card twice!</h3>
        <Score topScore={highScore} currentScore={currentScore}></Score>
        {gameOver ? (
          <div>
            <h1>Game Over</h1>

            <PlayButton
              id={deckId}
              getImage={getCardImage}
              setGameOn={() => setGameOn(true)}
              setGameOver={() => setGameOver(false)}
              resetMap={() => setOccurences(new Map())}
              resetScore={() => setCurrentScore(0)}
            >
              Play again?
            </PlayButton>
          </div>
        ) : null}
        {gameOn && !gameOver ? (
          <div>
            <Card
              id={deckId}
              image={image}
              getImage={getCardImage}
              incrementScore={scoreIncrease}
              checkHighScore={compareScores}
              checkMap={checkMap}
              code={code}
            ></Card>
            <SkipButton id={deckId} getImage={getCardImage}></SkipButton>
          </div>
        ) : null}
        {!gameOn && !gameOver ? (
          <PlayButton
            id={deckId}
            getImage={getCardImage}
            setGameOn={() => setGameOn(!gameOn)}
            setGameOver={() => setGameOver(false)}
            resetMap={() => setOccurences(new Map())}
            resetScore={() => setCurrentScore(0)}
          >
            Play
          </PlayButton>
        ) : null}
      </div>
    </>
  );
}

export default App;
