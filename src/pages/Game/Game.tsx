import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayerSideBar from "../../components/PlayerSideBar";
import PlayingTable from "../../components/PlayingTable";
import Seo from "../../components/Seo/Seo";
import { Params } from "../../interfaces/initialStates";
import { PropsFromRedux } from ".";
import { Player } from "../../interfaces";

interface Props extends PropsFromRedux {}

const Game = ({ board, notify }: Props) => {
  const { gameId } = useParams<Params>();
  const currentPlayer = board.players.find(
    (player: Player) => player.id === board.turn
  );
  useEffect(() => {
    if (board.winner) {
      notify({
        alertType: "success",
        message: `${board.winner.playerName} WINS!!!`,
      });
    }
  }, [board.winner, notify]);

  return (
    <>
      <Seo title={`Game ${gameId}`} description={`Playing Game ${gameId}`} />
      <div className="container flex flex-wrap items-center my-12 mx-auto sm:px-0 px-4">
        <div className="sm:w-9/12 w-full sm:p-8 p-0">
          <h4 className="text-center text-2xl font-semibold text-secondary mb-8">
            {board.winner
              ? `${board.winner.playerName} WINS!!!`
              : `${currentPlayer?.playerName}'s Turn`}
          </h4>
          <PlayingTable />
        </div>
        <div className="sm:w-3/12 w-full xsm:mt-0 mt-4 bg-white text-gray-700 rounded p-4">
          <PlayerSideBar />
        </div>
      </div>
    </>
  );
};

export default Game;
