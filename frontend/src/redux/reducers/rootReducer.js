import { combineReducers } from "redux";
import { allCardsReducer } from "./cardsReducer";
import { allCategoriesReducer } from "./categoriesReducer";

import { loginUser } from "./userReducer"; 

import { subscribedReducer } from "./subscribedReducer";


export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,

  cards: allCardsReducer,
  search: allCardsReducer,


   user: loginUser,
  

  oneCategory: allCategoriesReducer,
  subscribe: allCategoriesReducer,
  subscribed: subscribedReducer,


});
