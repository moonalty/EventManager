import { combineReducers } from "redux";
import { allCategoriesReducer } from "./categoriesReducer";
import {creatorReducer} from './creatorReduser'
import { loginUser } from "./userReducer";

import { subscribedReducer } from "./subscribedReducer";


export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,
  user: loginUser,
  oneCategory: allCategoriesReducer,
  subscribe: allCategoriesReducer,
  subscribed: subscribedReducer,
  creators: creatorReducer,
});
