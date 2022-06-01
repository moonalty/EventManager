import {
  SHOW_CATEGORIES,
  SHOW_ALL_CATEGORIES,
  ONE_CATEGORY,
  SUBSCRIBE,
  DELETE_CARD,
  FILTER_CATEGORIES
} from "../actionTypes/categoriesAT";

const initialState = { categories: [], allCategories: [], oneCategory: [] };

export const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORIES:
      console.log(action.payload);
      return { ...state, categories: action.payload };
    case SHOW_ALL_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case ONE_CATEGORY:
      return { ...state, oneCategory: action.payload };
    case SUBSCRIBE:
      return state;
      case FILTER_CATEGORIES:
        if (action.payload === 'date'){
          const new1 = state.categories.sort((a, b) => a.date_start > b.date_start ? 1 : -1)
          return {...state, categories: new1 }
        } else if (action.payload === 'cost') {
          const new2 = state.categories.sort((a, b) => a.cost > b.cost ? 1 : -1)
          return {...state, categories: new2 }
        };
        
    default:
      return state;
  }
};
