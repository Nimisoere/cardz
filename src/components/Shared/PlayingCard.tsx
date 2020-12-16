import React from "react";
import Card from "../../utils/card";
import style from "./PlayingCard.module.scss";

interface Props {
  card: Card;
}

const PlayingCard = ({ card }: Props) => {
  return (
    <div
      className={`${style.playingCard} ${style[card.suit]} ${
        style[`cards_${card.value}`]
      } justify-center items-center flex flex-wrap text-black font-bold`}
    >
      &nbsp;
    </div>
  );
};

export default PlayingCard;
