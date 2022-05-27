import {
  SHOW_CATEGORIES,
  SHOW_ALL_CATEGORIES,
  ONE_CATEGORY,
  SUBSCRIBE,
} from "../actionTypes/categoriesAT";

const initialState = { categories: [], allCategories: [], oneCategory: [] };

export const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return { ...state, categories: action.payload };
    case SHOW_ALL_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case ONE_CATEGORY:
      console.log("AP>>>>>", action.payload);
      return { ...state, oneCategory: action.payload };
    case SUBSCRIBE:
      return state;
    default:
      return state;
  }
};
