import {
  SHOW_CATEGORIES,
  SHOW_ALL_CATEGORIES
} from "../actionTypes/categoriesAT";

const initialState = { categories: [], allCategories:[] };

export const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return { ...state, categories: action.payload };
      case SHOW_ALL_CATEGORIES:
        return { ...state, allCategories: action.payload };
    default:
      return state;
  }
};
