import { User } from './types';
import { SET_USER, UserActionTypes } from './actionTypes';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  // console.log("Action in Reducer:", action); 
  switch (action.type) {
    case SET_USER:
      // console.log("Updating state with user:", action.payload)
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
