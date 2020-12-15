import React from "react";
import { useParams } from "react-router-dom";
import { Params } from "../../interfaces/initialStates";
import Board from "../../utils/board";
import Player from "../../utils/player";
import PlayerRow from "./PlayerRow";

interface Props {
  players: Player[];
  board: Board;
}

const Players = ({ players, board }: Props) => {
  const { gameId } = useParams<Params>();

  return (
    <div className="bg-white rounded p-2">
      <h4 className="text-secondary font-bold">Game {gameId}</h4>
      <div className="w-full">
        {players.map((player: Player) => (
          <PlayerRow board={board} key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
