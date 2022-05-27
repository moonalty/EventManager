import { combineReducers } from "redux";
import { allCardsReducer } from "./cardsReducer";
import { allCategoriesReducer } from "./categoriesReducer";

export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,
  cards: allCardsReducer,
  search: allCardsReducer,
});
