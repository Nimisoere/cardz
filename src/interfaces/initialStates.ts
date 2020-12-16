import { AppState, Board, NotificationState } from ".";

export const initialNotificationState: NotificationState = {
  alertType: "info",
  message: "",
};

export const initialBoardState: Board = {
  id: "",
  cardsInMiddle: [],
  players: [],
  turn: "",
  winner: null,
};

export const initialState: AppState = {
  notification: initialNotificationState,
  board: initialBoardState,
};

export interface Params {
  [x: string]: string | undefined;
  [x: number]: string | undefined;
}
