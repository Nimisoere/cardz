import React from "react";
import { Link } from "react-router-dom";
import { uid } from "uid";
import { PropsFromRedux } from ".";
import Card from "../../utils/card";
import PlayingCard from "../Shared/PlayingCard";
import style from "./PlayingTable.module.scss";

interface Props extends PropsFromRedux {}

const PlayingTable = ({ board }: Props) => {
  return (
    <div className={`flex w-full h-full  ${style.playingTable}`}>
      <div className="w-9/12 justify-center items-center flex">
        {board.winner ? (
          <Link
            to="/new-game"
            className="btn btn-secondary font-semibold border-b-8 border-yellow-700 text-sm p-6 w-96 hover:border-b-4"
          >
            New Game
          </Link>
        ) : (
          <>
            {board.cardsInMiddle.slice(0, 6).map((card: Card) => (
              <PlayingCard key={uid(8)} card={card} />
            ))}
          </>
        )}
      </div>
      <div className="w-3/12 bg-yellow-900 flex justify-center items-center h-full">
        <div className="p-8 w-full text-center">
          <h4>Number of Cards in middle</h4>
          <p className="text-6xl font-semibold">{board.cardsInMiddle.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayingTable;
