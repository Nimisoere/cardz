import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
import { BoardActionProps } from "../../interfaces";
import { initialBoardState } from "../../interfaces/initialStates";
import Board from "../../utils/board";

const board = createSlice({
  name: "game_board",
  initialState: initialBoardState,
  reducers: {
    startGame(state, action: PayloadAction<BoardActionProps>) {
      let gameBoard = new Board();
      gameBoard.start(action.payload.numberOfPlayers);
      state.id = uid(8);
      state.players = gameBoard.players;
      state.cardsInMiddle = gameBoard.cardsInMiddle;
      state.turn = gameBoard.players[0].id;
    },
    play(state, action: PayloadAction<BoardActionProps>) {},
    resetGame(state, action: PayloadAction<BoardActionProps>) {},
    updatePlayer(state, action: PayloadAction<BoardActionProps>) {
      state = { ...state, ...initialBoardState };
    },
    shuffle(state, action: PayloadAction<BoardActionProps>) {},
  },
});

export const {
  startGame,
  play,
  resetGame,
  updatePlayer,
  shuffle,
} = board.actions;

export default board.reducer;
