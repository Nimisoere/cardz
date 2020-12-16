import React from "react";
import { Player, Board } from "../../interfaces";
import style from "./PlayerRow.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

interface Props {
  player: Player;
  board: Board;
}

const PlayerRow = ({ player, board }: Props) => {
  return (
    <div className="w-full flex my-6">
      <div className={`${style.cardDisplay} rounded w-1/6`}></div>
      <div className="w-5/6">
        <h4 className="font-semibold flex items-center">
          {player.playerName}{" "}
          <button>
            <AiOutlineEdit className="text-gray-400" />
          </button>
        </h4>
        <p className="text-secondary text-sm">
          {player.playerCards.length} Cards
        </p>
        <div className="w-full flex justify-start">
          <button
            onClick={() => null}
            className={`btn btn-secondary mr-4 ${style["homebtn-secondary"]}`}
          >
            Shuffle
          </button>
          <button
            onClick={() => null}
            className={`btn btn-primary ${style["homebtn-primary"]}`}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerRow;
