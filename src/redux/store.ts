import { configureStore, Action } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkAction } from "redux-thunk";

import { initialState } from "../interfaces/initialStates";

import rootReducer, { RootState } from "./reducers";

const persistConfig = {
  key: "retailr-xceltopdf",
  storage,
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
