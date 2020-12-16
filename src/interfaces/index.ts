export type VerticalPosition = "top" | "bottom";
export type HorizontalPosition = "left" | "right" | "center";
export type AlertType = "success" | "error" | "info" | "warning";

export enum NotificationActionTypes {
  SHOW = "NOTIFICATION_SHOW",
  CLEAR = "NOTIFICATION_CLEAR",
}

export interface NotificationActionProps {
  alertType: AlertType;
  message: string;
}

export interface BoardActionProps {
  numberOfPlayers: number;
}

export interface NotificationState {
  alertType: AlertType;
  message: string;
}

export interface AppState {
  notification: NotificationState;
  board: Board;
}

export type Suit = "spade" | "heart" | "joker" | "diamond" | "clubs";
export type Rank =
  | "ace"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "jack"
  | "queen"
  | "king"
  | "joker";
export type CardValue =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

export interface Card {
  suit: Suit;
  rank: Rank;
  value: CardValue;
}

export interface Player {
  id: string;
  playerName: string;
  playerCards: Card[];
}

export interface Board {
  id: string;
  cardsInMiddle: Card[];
  players: Player[];
  turn: string;
}
