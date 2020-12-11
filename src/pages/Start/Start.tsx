import React from "react";
import { useForm } from "react-hook-form";
import { Datum } from "../../interfaces";

interface Props {}

const Start = (props: Props) => {
  const playerArr = Array(4)
    .fill(null)
    .map((_, i) => i + 1);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: Datum) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ height: "50vh" }}
      className="container justify-center flex flex-col items-center mx-auto my-16"
    >
      <select
        name="numberOfPlayers"
        ref={register({ required: true })}
        className="bg-white w-96 rounded px-2 shadow-sm text-gray-700 py-4"
      >
        <option value="">Select number of players</option>
        {playerArr.map((item) => (
          <option value={item}>
            {item} Player{item > 1 && "s"}{" "}
          </option>
        ))}
      </select>
      {errors.numberOfPlayers && (
        <span className="text-xs my-3 text-white">
          Select number of players
        </span>
      )}
      <button type="submit" className={`my-8 w-96 p-4 btn btn-secondary`}>
        Start Game
      </button>
    </form>
  );
};

export default Start;
