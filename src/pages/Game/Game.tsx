import React from "react";
import { useParams } from "react-router-dom";
import PlayerSideBar from "../../components/PlayerSideBar";
import Seo from "../../components/Seo/Seo";
import { Params } from "../../interfaces/initialStates";

interface Props {}

const Game = (props: Props) => {
  const { gameId } = useParams<Params>();
  return (
    <div className="container flex mx-auto my-6">
      <Seo title={`Game ${gameId}`} description={`Playing Game ${gameId}`} />
      <div className="w-3/12 bg-white text-gray-700 rounded p-4">
        <PlayerSideBar />
      </div>
    </div>
  );
};

export default Game;
