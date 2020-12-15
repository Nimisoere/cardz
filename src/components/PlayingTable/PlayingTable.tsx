import React from "react";
import Card from "../../utils/card";
import PlayingCard from "../Shared/PlayingCard";
import style from "./PlayingTable.module.scss";

interface Props {
  cardsInMiddle: Card[];
}

const PlayingTable = ({ cardsInMiddle }: Props) => {
  return (
    <div className={`flex w-full h-full ${style.playingTable}`}>
      {cardsInMiddle.map((card: Card) => (
        <PlayingCard key={`${card.suit}_${card.rank}`} card={card} />
      ))}
    </div>
  );
};

export default PlayingTable;
