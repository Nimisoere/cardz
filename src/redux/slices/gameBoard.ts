import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
import {
  BoardActionProps,
  BoardPlayActionProps,
  BoardPlayerActionProps,
  PlayActionProps,
  Player,
  PlayerCardActionProps,
} from "../../interfaces";
import { initialBoardState } from "../../interfaces/initialStates";
import Board from "../../utils/board";
import { play as playTurn } from "../../utils/common";

import { history } from "../store";
import { show } from "./notification";

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
    play(
      state,
      {
        payload: { cards, cardsInMiddle, turn, player: playerParams },
      }: PayloadAction<PlayActionProps>
    ) {
      state.cardsInMiddle = [...cardsInMiddle];
      state.turn = turn || "";
      state.players = state.players.map((player: Player) =>
        player.id === playerParams.id
          ? {
              ...player,
              playerCards: [...cards],
            }
          : player
      );
      state.winner = turn ? null : playerParams;
    },
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
        winner: null,
        ...board,
      },
    })
  );
  history.push(`/game/${boardId}`);
};

export const playAction = (payload: BoardPlayActionProps) => (
  dispatch: Dispatch
) => {
  const { cards, cardsInMiddle, turn, chopped } = playTurn(
    payload.player,
    payload.board
  );
  if (chopped) {
    dispatch(
      show({
        alertType: "info",
        message: `${payload.player.playerName} cleared the table`,
      })
    );
  }
  dispatch(
    play({
      cards,
      cardsInMiddle,
      turn,
      player: payload.player,
    })
  );
};

export default board.reducer;
