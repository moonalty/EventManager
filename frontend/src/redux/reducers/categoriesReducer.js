import { SHOW_CATEGORIES } from "../actionTypes/categoriesAT";

const initialState = { categories: [] };

export const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
