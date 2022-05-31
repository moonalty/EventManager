import { LOGOUT } from "../actionTypes/logoutAT";

export const logoutAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};
