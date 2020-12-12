import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Seo from "../../components/Seo/Seo";
import style from "./Home.module.scss";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto h-screen">
      <Seo title="Play" description="Play Cardz" />
      <div className="w-full text-center">
        <img src={logo} className="inline-block w-96" alt="cardz logo" />
      </div>
      <div className="w-full flex flex-col my-8 items-center justify-center ">
        <Link
          className={`mb-12 btn btn-secondary ${style["homebtn-secondary"]}`}
          to="/game/2322"
        >
          Continue Game
        </Link>
        <Link
          className={`mb-12 btn btn-secondary ${style["homebtn-secondary"]}`}
          to="/new-game"
        >
          New Game
        </Link>
        <Link
          className={`mb-12 btn btn-primary ${style["homebtn-primary"]}`}
          to="/rules"
        >
          Rules
        </Link>
      </div>
    </div>
  );
};

export default Home;
