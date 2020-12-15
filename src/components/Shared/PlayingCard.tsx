import React from "react";
import Card from "../../utils/card";

interface Props {
  card: Card;
}

const PlayingCard = ({ card }: Props) => {
  return (
    <div>
      {card.rank} {card.suit}
    </div>
  );
};

export default PlayingCard;
