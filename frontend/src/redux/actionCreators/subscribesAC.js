import { SUBSCRIBED } from "../actionTypes/subscribesAT";

export const subscribedAC = (payload) => {
  return {
    type: SUBSCRIBED,
    payload,
  };
};
