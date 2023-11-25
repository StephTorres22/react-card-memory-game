import fetch from "node-fetch";

async function getDeckID() {
  try {
    const res = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );

    const deck = await res.json();
    const deckID = await deck.deck_id;
    return deckID;
  } catch {
    console.log("Unable to retrieve deck");
  }
}

async function drawCard(id) {
  try {
    const res = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const card = res.json();
    return card;
  } catch {
    console.log("Unable to retrieve card");
  }
}

console.log(await drawCard("alnpw9fuz3ee"));

async function returnCardsToDeck(id) {
  try {
    const res = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${id}/return/`
    );
    const deck = res.json();
    return deck
  } catch {
    console.log("Unable to return cards to deck");
  }
}

console.log(await returnCardsToDeck("alnpw9fuz3ee"));

async function shuffleDeck(id) {
  try {
    const res = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${id}/shuffle/`
    );
    const deck = res.json();
    return deck
  } catch {
    console.log("Unable to shuffle cards");
  }
}

console.log(await shuffleDeck("alnpw9fuz3ee"));
