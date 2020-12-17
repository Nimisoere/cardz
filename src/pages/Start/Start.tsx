import React from "react";
import { useForm } from "react-hook-form";
import Seo from "../../components/Seo/Seo";
import { PropsFromRedux } from ".";
import Board from "../../utils/board";

interface Props extends PropsFromRedux {}

const Start = ({ startGame }: Props) => {
  const playerArr = Array(3)
    .fill(null)
    .map((_, i) => i + 2);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    let gameBoard = new Board();
    gameBoard.start(data.numberOfPlayers);
    const gameBoardJS = gameBoard.toPlainObj();
    startGame(gameBoardJS);
  };

  return (
    <div className="w-full">
      <Seo title="New Game" description="Create New Cardz Game" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: "50vh" }}
        className="container justify-center flex flex-col items-center mx-auto my-16 sm:px-0 px-4"
      >
        <select
          name="numberOfPlayers"
          ref={register({ required: true })}
          className="bg-white w-96 max-w-full rounded px-2 shadow-sm text-gray-700 py-4"
        >
          <option value="">Select number of players</option>
          {playerArr.map((item) => (
            <option key={item} value={item}>
              {item} Player{item > 1 && "s"}{" "}
            </option>
          ))}
        </select>
        {errors.numberOfPlayers && (
          <span className="text-xs my-3 text-white">
            Select number of players
          </span>
        )}
        <button
          type="submit"
          className={`my-8 w-96 max-w-full p-4 btn btn-secondary`}
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Start;
