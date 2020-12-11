import { AxiosError } from "axios";

export type VerticalPosition = "top" | "bottom";
export type HorizontalPosition = "left" | "right" | "center";
export type AlertType = "success" | "error" | "info" | "warning";

export enum NotificationActionTypes {
  SHOW = "NOTIFICATION_SHOW",
  CLEAR = "NOTIFICATION_CLEAR",
}

export interface NotificationActionProps {
  alertType: AlertType;
  message: string;
}

export interface NotificationState {
  alertType: AlertType;
  message: string;
}

export interface AppState {
  notification: NotificationState;
  apiRequest: KeyFetchState;
}

export interface KeyFetchState {
  [x: string]: FetchState;
}

export interface KeyFetchAction {
  key: string;
  request?: Datum | null;
  response?: Data | Datum | null;
  error?: AxiosError | null;
}

export interface FetchState {
  loading: boolean;
  success: boolean;
  request: Datum | null;
  response: any | null;
  error: AxiosError | null;
}

export interface Datum {
  [i: number]: never | boolean;
  [k: string]: any | boolean;
}

export interface FetchAction {
  type: string;
  request?: Datum | null;
  response?: Data | Datum | null;
  error?: AxiosError | null;
}

export type Data = Datum[];

export enum API_KEYS {
  GET_TEMPLATES = "GET_TEMPLATES",
  GET_TEMPLATE = "GET_TEMPLATES",
  CREATE_TEMPLATE = "GET_TEMPLATES",
  UPDATE_TEMPLATE = "GET_TEMPLATES",
  GENERATE_PDF = "GENERATE_PDF",
  CONVERT_XLS = "CONVERT_XLS",
}
