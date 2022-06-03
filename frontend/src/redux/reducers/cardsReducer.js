import { SHOW_ALL_CARDS, SHOW_SEARCH_CARDS } from "../actionTypes/cardsAT";
import { DELETE_CARD } from "../actionTypes/categoriesAT";

const initialState = {
  cards: [],
  search: [],
};

export const allCardsReducer = (state = initialState, action) => {
  console.log('CARDSFORMAP!!!!!!!!!!', state.cards);
  switch (action.type) {
    case SHOW_ALL_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case SHOW_SEARCH_CARDS:
    console.log(action.payload)
    return {
        ...state,
        search: action.payload,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: [state.cards.filter((el) => el.id !== +action.payload)],
      };

    default:
      return state;
  }
};
