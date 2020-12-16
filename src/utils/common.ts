import { Board, Card, Player } from "../interfaces";

export const shuffleCards = (array: Card[]): Card[] => {
  var newArray: Card[] = [];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    if (newArray.hasOwnProperty(currentIndex)) {
      temporaryValue = newArray[currentIndex];
    } else {
      temporaryValue = array[currentIndex];
    }
    newArray[currentIndex] = array[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
};

const getNewIndex = (currentIndex: number, board: Board) => {
  let newIndex = currentIndex;
  if (newIndex < board.players.length - 1) {
    newIndex++;
  } else if (newIndex === board.players.length - 1) {
    newIndex = 0;
  }
  return newIndex;
};

// Set turn to next player
const getNextTurn = (currentIndex: number, board: Board) => {
  const startIndex = currentIndex;
  let newIndex = getNewIndex(currentIndex, board);

  while (!board.players[newIndex].playerCards.length) {
    newIndex = getNewIndex(newIndex, board);
  }
  if (startIndex === newIndex) {
    console.log(`${board.players[startIndex].playerName} WINS`);
    return `${board.players[startIndex].playerName} WINS`;
  }
  board.turn = board.players[newIndex].id;
};

const checkIfCardsMatch = (currentIndex: number, board: Board) => {
  // If card shapes match
  if (
    board.cardsInMiddle.length > 1 &&
    board.cardsInMiddle[0].suit === board.cardsInMiddle[1].suit
  ) {
    // Push all cards in middle to player's stack
    board.players[currentIndex].playerCards.push(...board.cardsInMiddle);
    // Empty Cards in middle
    board.cardsInMiddle = [];
    // Pop card on top of player's stack to middle
    const cardtoPlay = board.players[currentIndex].playerCards.pop();
    cardtoPlay && board.cardsInMiddle.push(cardtoPlay);
  }
};

// Play a turn
export const play = (playerId: string, board: Board) => {
  // Get player index
  const currentIndex = board.players.findIndex(
    (player: Player) => player.id === playerId
  );

  // If found
  if (currentIndex || currentIndex === 0) {
    // Check if user has cards
    if (board.players[currentIndex].playerCards.length) {
      // Pop card off stack
      const cardtoPlay = board.players[currentIndex].playerCards.pop();
      // Add card to top of cards in middle
      cardtoPlay && board.cardsInMiddle.unshift(cardtoPlay);
      // Check if its a match
      checkIfCardsMatch(currentIndex, board);
    }
    // Move turn to next player
    getNextTurn(currentIndex, board);
  }
};
