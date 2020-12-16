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
    <div className="container flex items-center my-12 mx-auto">
      <Seo title={`Game ${gameId}`} description={`Playing Game ${gameId}`} />
      <div className="w-3/12 bg-white text-gray-700 rounded p-4">
        <PlayerSideBar />
      </div>
      <div className="w-9/12 p-8">
        <h4 className="text-center text-2xl font-semibold text-secondary mb-8">
          {board.winner
            ? `${board.winner.playerName} WINS!!!`
            : `${currentPlayer?.playerName}'s Turn`}
        </h4>
        <PlayingTable />
      </div>
    </div>
  );
};

export default Game;
