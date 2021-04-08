import { cardTypes, cardColors, cardIDs, cards } from "./misc/cards.js";

const game = {};
const numOfDecksToCombine = 2;

function createDeck() {
    let deck = [];
    cards.forEach((card) => {
        addCardsToDeck(numOfDecksToCombine * card.numPerDeckPerColor, card, deck);
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

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(deck) {
    for (let cardIndex = deck.length - 1; cardIndex > 0; cardIndex--) {
        let secondIndex = randomInt(cardIndex + 1);
        [deck[cardIndex], deck[secondIndex]] = [deck[secondIndex], deck[cardIndex]]
    }
}

function createPlayer(playerName) {
    const player = {
        name: playerName,
        hand: []
    }

    return player;
}

function createPlayersFromNameList(...playerNames) {
    const players = [];
    [...playerNames].forEach((playerName) => {
        const player = createPlayer(playerName);
        players.push(player);
    });

    return players;
}

function dealCardsToPlayer(player, numOfCards) {
    for (let cardsDealt = 0; cardsDealt < numOfCards; cardsDealt++) {
        if (isDeckEmpty()) {
            reshufflePile(game.pile, game.deck)
        }

        player.hand.push(game.deck.pop());
    }
}

function reshufflePile(pile, deck) {
    const topCard = pile.pop();
    shuffle(pile);
    deck = pile;
    pile = topCard;
}

function isDeckEmpty() {
    return game.deck.length === 0;
}

game.players = createPlayersFromNameList("Me", "Them", "You");
game.deck = createDeck();
game.pile = [];
game.currentPlayer = game.players[randomInt(game.players.length)];
shuffle(game.deck);
game.players.forEach((player) => {
    dealCardsToPlayer(player, 8);
});

console.dir(game);