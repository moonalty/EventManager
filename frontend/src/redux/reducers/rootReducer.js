import { combineReducers } from "redux";
import { allCategoriesReducer } from "./categoriesReducer";

export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,
  oneCategory: allCategoriesReducer,
});
