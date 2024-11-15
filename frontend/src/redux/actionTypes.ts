import { User } from "./types";

// src/redux/actionTypes.ts
export const SET_USER = 'SET_USER';

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export type UserActionTypes = SetUserAction;
