import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as deckFunction from "./deck.js";
import { Card } from "./Components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [deckId, setDeckId] = useState("");

  useEffect(() => {
    async function getDeckId() {
      const id = await deckFunction.getDeckID();
      setDeckId(id);
    }

    getDeckId();
  }, []);

  return (
    <>
      <div>
        <Card id={deckId}></Card>
      </div>
    </>
  );
}

export default App;
