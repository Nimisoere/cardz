import Card from "./card";
import { uid } from "uid";

class Player {
  id: string;
  playerName: string;
  playerCards: Card[];
  constructor(name: string) {
    this.id = uid(8);
    this.playerName = name;
    this.playerCards = [];
  }
  modifyPlayer(name: string) {
    this.playerName = name;
  }
}

export default Player;
