import { CHECK_RATE, RATE } from "../actionTypes/rateAT";

export const rateAC = (payload) => {
  return {
    type: RATE,
    payload,
  };
};
export const checkRateAC = (payload) => {
  return {
    type: CHECK_RATE,
    payload,
  };
};
