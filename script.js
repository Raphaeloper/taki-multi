import { cardTypes, cardColors, cardIDs, cards } from "./misc/cards.js";

function createDeck() {
    let deck = [];
    cards.forEach((card) => {
        if (card.id === cardIDs.color_change) {
            addCardsToDeck(4, card, deck);
        } else {
            addCardsToDeck(2, card, deck);
        }
    });
    return deck;
}

function addCardsToDeck(numOfCardsPerColor, card, deck) {
    for (let i = 0; i < numOfCardsPerColor; i++) {
        if (card.type === cardTypes.uncoloredAction) {
            let cardCopy = { ...card };
            deck.push(cardCopy);
        } else {
            Object.keys(cardColors).forEach((color) => {
                let cardCopy = { ...card };
                cardCopy.color = cardColors[color];
                deck.push(cardCopy);
            });
        }
    }
}