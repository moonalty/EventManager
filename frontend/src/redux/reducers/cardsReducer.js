import { SHOW_ALL_CARDS, SHOW_SEARCH_CARDS } from "../actionTypes/cardsAT";

const initialState = {
  cards: [],
  search: [],
};

export const allCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL_CARDS:
      console.log(action.payload);
      return {
        ...state,
        cards: action.payload,
      };
    case SHOW_SEARCH_CARDS:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
