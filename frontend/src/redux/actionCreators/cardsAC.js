import { SHOW_ALL_CARDS, SHOW_SEARCH_CARDS } from "../actionTypes/cardsAT";
import { DELETE_CARD } from "../actionTypes/categoriesAT";

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

export const cardsDeleteAC = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};
