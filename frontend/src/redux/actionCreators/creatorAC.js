import { CREATOR } from "../actionTypes/creatorAT";

export const creatorAC = (payload) => {
  return {
    type: CREATOR,
    payload,
  };
};
