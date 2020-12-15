import Card from "./card";
import Deck from "./deck";
import Player from "./player";

class Board {
  cardsInMiddle: Card[];
  players: Player[];
  turn: string;
  constructor() {
    this.cardsInMiddle = [];
    this.players = [];
    this.turn = "";
  }
  private distributePlayerCards() {
    const deck = new Deck();
    deck.addCards();
    deck.shuffleDeck();
    const numberOfCards = deck.cards.length;
    const numberOfPlayers = this.players.length;
    const splitWays = Math.floor(numberOfCards / numberOfPlayers);
    // Give equal number of cards
    this.players.forEach((player: Player, index: number) => {
      player.playerCards = deck.cards.splice(0, splitWays);
    });
    // Share leftover cards
    if (deck.cards.length) {
      deck.cards.forEach((card: Card, index: number) => {
        this.players[index].playerCards.push(card);
      });
    }
  }
  start(playerCount: number) {
    for (let i = 0; i <= playerCount - 1; i++) {
      this.players.push(new Player(`Player ${i + 1}`));
    }
    this.distributePlayerCards();
    this.turn = this.players[0].id;
  }
  private getNextTurn(currentIndex: number) {}
  private checkIfCardsMatch() {}
  play(playerId: string) {
    const currentIndex = this.players.findIndex(
      (player: Player) => player.id === playerId
    );
    if (currentIndex || currentIndex === 0) {
      const cardtoPlay = this.players[currentIndex].playerCards.pop();
      cardtoPlay && this.cardsInMiddle.unshift(cardtoPlay);
      this.checkIfCardsMatch();
      this.getNextTurn(currentIndex);
    }
  }
  shuffleCards(playerId: string) {}
}

export default Board;
