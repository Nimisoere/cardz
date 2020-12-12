import React from "react";
import { useParams } from "react-router-dom";
import { Params } from "../../interfaces/initialStates";

interface Props {}

const Players = (props: Props) => {
  const { gameId } = useParams<Params>();

  return (
    <div className="bg-white rounded p-2">
      <h4 className="text-secondary font-bold">Game {gameId}</h4>
    </div>
  );
};

export default Players;
