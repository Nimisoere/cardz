import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import Start from "./Start";
import { startGame } from "../../redux/slices/gameBoard";

const mapState = ({ board }: AppState) => ({
  board,
});

const mapDispatch = {
  startGame,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Start);
