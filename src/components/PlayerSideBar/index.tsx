import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import Players from "./Players";
import {
  updatePlayer,
  shuffle,
  playAction,
} from "../../redux/slices/gameBoard";
import { show } from "../../redux/slices/notification";

const mapState = (state: AppState) => ({
  board: state.board,
  notification: state.notification,
});

const mapDispatch = {
  notify: show,
  updatePlayer,
  shuffle,
  play: playAction,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Players);
