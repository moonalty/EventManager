import { WELCOME } from "../actionTypes/welcomeAT";

export const welcomeAC = (payload) => {
  return {
    type: WELCOME,
    payload,
  };
};
