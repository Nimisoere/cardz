import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KeyFetchAction, KeyFetchState } from "../../interfaces";
import { initialFetchState } from "../../interfaces/initialStates";

const apiRequest = createSlice({
  name: "apiRequest",
  initialState: {} as KeyFetchState,
  reducers: {
    apiRequestLoading(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: true,
        request: action.payload.request || null,
      };
    },
    apiRequestSuccess(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: true,
        response: action.payload.response,
        error: null,
      };
    },
    apiRequestFailure(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: false,
        error: action.payload.error || null,
      };
    },
    apiRequestReset(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        ...initialFetchState,
      };
    },
    apiRequestResetAll(state, action: PayloadAction<KeyFetchAction>) {
      state = {} as KeyFetchState;
    },
    apiRequestUpdateResponse(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: true,
        response: {
          ...state[action.payload.key]?.response,
          ...action.payload.response,
        },
      };
    },
    apiRequestReplaceResponse(state, action: PayloadAction<KeyFetchAction>) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: true,
        response: action.payload.response,
        error: null,
      };
    },
  },
});

export const { 
  apiRequestFailure, 
  apiRequestLoading, 
  apiRequestReplaceResponse, 
  apiRequestReset, 
  apiRequestResetAll, 
  apiRequestSuccess, 
  apiRequestUpdateResponse 
} = apiRequest.actions;

export default apiRequest.reducer;
