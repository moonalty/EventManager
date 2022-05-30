import { ORGCARDS } from '../actionTypes/orgCardsAT'

export const orgCardsAC = (payload) => {
  return {
    type: ORGCARDS,
    payload,
  };
};
