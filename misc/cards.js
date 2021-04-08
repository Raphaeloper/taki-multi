export const cardTypes = {
    number: "NUMBER",
    coloredAction: "COLOR_ACTION",
    uncoloredAction: "NO_COLOR_ACTION"
}

export const cardColors = {
    green: "#69b727",
    red: "#fc2314",
    yellow: "#f9f90f",
    blue: "#4cbbdb"
}

export const cardIDs = {
    one: "1",
    pTwo: "+2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    skip: "SKIP",
    reverse: "REVERSE",
    plus: "PLUS",
    taki: "TAKI",
    color_change: "COLOR_CHANGE",
    super_taki: "SUPER_TAKI",
    king: "KING"
}

export const cards = [
    {
        id: cardIDs.one,
        type: cardTypes.number,
        numPerDeckPerColor: 1 
    },
    {
        id: cardIDs.pTwo,
        type: cardTypes.coloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.three,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.four,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.five,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.six,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.seven,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.eight,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.nine,
        type: cardTypes.number,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.skip,
        type: cardTypes.coloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.reverse,
        type: cardTypes.coloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.plus,
        type: cardTypes.coloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.taki,
        type: cardTypes.coloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.color_change,
        type: cardTypes.uncoloredAction,
        numPerDeckPerColor: 2
    },
    {
        id: cardIDs.super_taki,
        type: cardTypes.uncoloredAction,
        numPerDeckPerColor: 1
    },
    {
        id: cardIDs.king,
        type: cardTypes.uncoloredAction,
        numPerDeckPerColor: 1
    },
]