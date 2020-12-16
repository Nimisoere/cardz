import React, { useState } from "react";
import {
  BoardPlayActionProps,
  BoardPlayerActionProps,
  Player,
  Board,
  PlayerCardActionProps,
  NotificationActionProps,
} from "../../interfaces";
import style from "./PlayerRow.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { shuffleCards } from "../../utils/common";

interface Props {
  board: Board;
  player: Player;
  updatePlayer: ActionCreatorWithPayload<BoardPlayerActionProps, string>;
  shuffle: ActionCreatorWithPayload<PlayerCardActionProps, string>;
  play: (payload: BoardPlayActionProps) => void;
  notify: ActionCreatorWithPayload<NotificationActionProps, string>;
}

const PlayerRow = ({
  player,
  updatePlayer,
  shuffle,
  board,
  notify,
  play,
}: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  const setPlayerName = (data: any) => {
    updatePlayer({
      name: data[`player_${player.id}_name`],
      playerId: player.id,
    });
    setEditMode(false);
  };

  const handleShuffle = () => {
    const shuffledCards = shuffleCards(player.playerCards);
    shuffle({
      playerId: player.id,
      shuffledCards,
    });
    notify({
      alertType: "success",
      message: `${player.playerName} shuffled cards`,
    });
  };

  const playTurn = () => {
    if (player.id !== board.turn) {
      notify({
        alertType: "error",
        message: `Not your turn ${player.playerName}`,
      });
      return;
    }
    play({
      player,
      board,
    });
  };

  const isPlayerTurn = player.id === board.turn;

  return (
    <div
      className={`w-full flex py-6  p-2 ${isPlayerTurn ? "bg-green-200" : ""} ${
        !player.playerCards.length && "bg-gray-100"
      }`}
    >
      <div className={`${style.cardDisplay} rounded w-1/6`}></div>
      <div className="w-5/6">
        {player.playerCards.length ? (
          <>
            <h4 className={`font-semibold flex items-center `}>
              {editMode ? (
                <form onSubmit={handleSubmit(setPlayerName)}>
                  <input
                    type="text"
                    className="border border-gray-300 text-sm rounded p-1"
                    ref={register({ required: true })}
                    name={`player_${player.id}_name`}
                  />
                  <button
                    className="bg-green-500 text-white rounded p-1"
                    type="submit"
                  >
                    <FiCheck />
                  </button>
                  <button
                    className="bg-red-500 rounded p-1 text-white"
                    onClick={() => setEditMode(false)}
                  >
                    <FiX />
                  </button>
                </form>
              ) : (
                <>
                  {player.playerName}{" "}
                  <button onClick={() => setEditMode(true)}>
                    <AiOutlineEdit className="text-gray-400" />
                  </button>
                  {isPlayerTurn && (
                    <span className="bg-primary text-white rounded p-1 text-xs ml-auto">
                      Your turn
                    </span>
                  )}
                </>
              )}
            </h4>
            <p className="text-secondary text-sm">
              {player.playerCards.length} Cards
            </p>
            <div className="w-full flex justify-start">
              <button
                disabled={!player.playerCards.length}
                onClick={() => handleShuffle()}
                className={`btn btn-secondary mr-4 ${style["homebtn-secondary"]}`}
              >
                Shuffle
              </button>
              <button
                disabled={!player.playerCards.length}
                onClick={() => playTurn()}
                className={`btn btn-primary ${style["homebtn-primary"]}`}
              >
                Play
              </button>
            </div>
          </>
        ) : (
          <h4 className={`font-semibold flex items-center text-gray-400`}>
            {player.playerName} has no cards left
          </h4>
        )}
      </div>
    </div>
  );
};

export default PlayerRow;
