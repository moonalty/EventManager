import { SUBSCRIBED } from "../actionTypes/subscribesAT";

const initialState = { subscribed: [] };

export const subscribedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBED:
      return { ...state, subscribed: action.payload };
    default:
      return state;
  }
};
