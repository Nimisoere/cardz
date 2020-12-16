import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {
  component: React.ReactNode;
}

const Layout = ({ component, board }: Props) => {
  return (
    <div className="font-serif w-full">
      <div className="flex container mx-auto justify-between">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Cardz logo" className="h-20" />
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          {board.id && (
            <NavLink
              activeClassName="hidden"
              to={`/game/${board.id}`}
              className="btn btn-secondary hover:opacity-80"
            >
              Continue Game
            </NavLink>
          )}
          <NavLink
            activeClassName="hidden"
            to="/new-game"
            className="btn btn-secondary hover:opacity-80"
          >
            New Game
          </NavLink>
          <NavLink
            activeClassName="hidden"
            to="/rules"
            className="btn btn-primary hover:opacity-80"
          >
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
