import { CHANGE_STATE_CARDS } from "../actionTypes/changeStateCardsAT";


const initialState = {change: 1};

export const changeStateCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE_CARDS:
      return { ...state, change: state.change+1};
    default:
      return state;
  }
};
