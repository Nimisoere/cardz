import React from "react";
import { useParams } from "react-router-dom";
import PlayerSideBar from "../../components/PlayerSideBar";
import PlayingTable from "../../components/PlayingTable";
import Seo from "../../components/Seo/Seo";
import { Params } from "../../interfaces/initialStates";
import Board from "../../utils/board";

interface Props {}

const Game = (props: Props) => {
  const { gameId } = useParams<Params>();

  let gameBoard = new Board();
  gameBoard.start(4);

  return (
    <div className="container flex items-center my-12 mx-auto">
      <Seo title={`Game ${gameId}`} description={`Playing Game ${gameId}`} />
      <div className="w-3/12 bg-white text-gray-700 rounded p-4">
        <PlayerSideBar board={gameBoard} players={gameBoard.players} />
      </div>
      <div className="w-9/12 p-8">
        <h4 className="text-center text-2xl font-semibold text-secondary mb-8">
          Player 1's Turn
        </h4>
        <PlayingTable cardsInMiddle={gameBoard.cardsInMiddle} />
      </div>
    </div>
  );
};

export default Game;
