import { ORGCARDS } from "../actionTypes/orgCardsAT";
const initialState = { orgCards: [] };

export const orgCardsReducer = (state = initialState, action) => {
  console.log('ORGCARDS!!!!!!!!', action.payload);
  switch (action.type) {
    case ORGCARDS:
      return { ...state, orgCards: action.payload };
    default:
      return state;
  }
};
