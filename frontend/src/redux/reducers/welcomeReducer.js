import { WELCOME } from "../actionTypes/welcomeAT";

const initialState = { welcome: '' };

export const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case WELCOME:
      return { ...state, welcome: action.payload };
    default:
      return state;
  }
};
