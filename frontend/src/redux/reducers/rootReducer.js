import { combineReducers } from "redux";
import { allCategoriesReducer } from "./categoriesReducer";
import { subscribedReducer } from "./subscribedReducer";

export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,
  oneCategory: allCategoriesReducer,
  subscribe: allCategoriesReducer,
  subscribed: subscribedReducer,
});
