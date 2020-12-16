import React from "react";
import { PropsFromRedux } from ".";
import Card from "../../utils/card";
import PlayingCard from "../Shared/PlayingCard";
import style from "./PlayingTable.module.scss";

interface Props extends PropsFromRedux {}

const PlayingTable = ({ board }: Props) => {
  return (
    <div className={`flex w-full h-full ${style.playingTable}`}>
      {board.cardsInMiddle.map((card: Card) => (
        <PlayingCard key={`${card.suit}_${card.rank}`} card={card} />
      ))}
    </div>
  );
};

export default PlayingTable;
