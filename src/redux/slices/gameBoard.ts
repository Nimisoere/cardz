import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
import {
  BoardActionProps,
  BoardPlayerActionProps,
  Player,
  PlayerCardActionProps,
} from "../../interfaces";
import { initialBoardState } from "../../interfaces/initialStates";
import Board from "../../utils/board";

import { history } from "../store";

const board = createSlice({
  name: "game_board",
  initialState: initialBoardState,
  reducers: {
    startGame(state, { payload: { board } }: PayloadAction<BoardActionProps>) {
      state.id = board.id;
      state.players = board.players;
      state.cardsInMiddle = board.cardsInMiddle;
      state.turn = board.players[0].id;
    },
    play(state, action: PayloadAction<BoardActionProps>) {},
    updatePlayer(state, action: PayloadAction<BoardPlayerActionProps>) {
      state.players = state.players.map((player: Player) =>
        player.id === action.payload.playerId
          ? {
              ...player,
              playerName: action.payload.name,
            }
          : player
      );
    },
    shuffle(state, action: PayloadAction<PlayerCardActionProps>) {
      state.players = state.players.map((player: Player) =>
        player.id === action.payload.playerId
          ? {
              ...player,
              playerCards: [...action.payload.shuffledCards],
            }
          : player
      );
    },
  },
});

export const { startGame, play, updatePlayer, shuffle } = board.actions;

export const start = (board: Board) => (dispatch: Dispatch) => {
  const boardId = uid(8);
  dispatch(
    startGame({
      board: {
        id: boardId,
        ...board,
      },
    })
  );
  history.push(`/game/${boardId}`);
};

export default board.reducer;
