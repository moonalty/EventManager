import { ORGCARDS, ADD_CARD } from '../actionTypes/orgCardsAT'

export const orgCardsAC = (payload) => {
  return {
    type: ORGCARDS,
    payload,
  };
};

export const addCardsAC = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  }
}
