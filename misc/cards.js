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
        type: cardTypes.number
    },
    {
        id: cardIDs.pTwo,
        type: cardTypes.coloredAction
    },
    {
        id: cardIDs.three,
        type: cardTypes.number
    },
    {
        id: cardIDs.four,
        type: cardTypes.number
    },
    {
        id: cardIDs.five,
        type: cardTypes.number
    },
    {
        id: cardIDs.six,
        type: cardTypes.number
    },
    {
        id: cardIDs.seven,
        type: cardTypes.number
    },
    {
        id: cardIDs.eight,
        type: cardTypes.number
    },
    {
        id: cardIDs.nine,
        type: cardTypes.number
    },
    {
        id: cardIDs.skip,
        type: cardTypes.coloredAction
    },
    {
        id: cardIDs.reverse,
        type: cardTypes.coloredAction
    },
    {
        id: cardIDs.plus,
        type: cardTypes.coloredAction
    },
    {
        id: cardIDs.taki,
        type: cardTypes.coloredAction
    },
    {
        id: cardIDs.color_change,
        type: cardTypes.uncoloredAction
    },
    {
        id: cardIDs.super_taki,
        type: cardTypes.uncoloredAction
    },
    {
        id: cardIDs.king,
        type: cardTypes.uncoloredAction
    },
]