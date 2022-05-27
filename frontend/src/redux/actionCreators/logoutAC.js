import { LOGOUT } from "../actionTypes/logoutAT";

export const getFetchlogout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};
