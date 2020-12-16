import { combineReducers } from "redux";
import notification from "../slices/notification";
import board from "../slices/gameBoard";

const rootReducer = combineReducers({
  notification,
  board,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
