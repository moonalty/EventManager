import { CHECK_RATE, RATE } from "../actionTypes/rateAT";

const initialState = { rate: [], currentRate: 0 };

export const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE:
      return { ...state, rate: action.payload };
    case CHECK_RATE:
      return { ...state, currentRate: action.payload };
    default:
      return state;
  }
};
