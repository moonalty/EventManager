import { SHOW_ALL_CARDS, SHOW_SEARCH_CARDS } from "../actionTypes/cardsAT";

export const cardsAllRenderAC = (payload) => {
  return {
    type: SHOW_ALL_CARDS,
    payload,
  };
};
export const cardsSearchRenderAC = (payload) => {
  return {
    type: SHOW_SEARCH_CARDS,
    payload,
  };
};

