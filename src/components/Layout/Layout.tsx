import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

interface Props {
  component: React.ReactNode;
}

const Layout = ({ component }: Props) => {
  return (
    <div className="font-serif w-full">
      <div className="flex container mx-auto justify-between">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Cardz logo" className="h-20" />
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink
            to="/game/34343"
            className="btn btn-secondary hover:opacity-80"
          >
            Continue Game
          </NavLink>
          <NavLink
            to="/new-game"
            className="btn btn-secondary hover:opacity-80"
          >
            New Game
          </NavLink>
          <NavLink to="/rules" className="btn btn-primary hover:opacity-80">
            Rules
          </NavLink>
        </div>
      </div>
      <main className="w-full">
        <section>{component}</section>
      </main>
    </div>
  );
};

export default Layout;
