import { combineReducers } from "redux";
import { allCardsReducer } from "./cardsReducer";
import { allCategoriesReducer } from "./categoriesReducer";
import { creatorReducer } from "./creatorReduser";
import { loginUser } from "./userReducer";

import { subscribedReducer } from "./subscribedReducer";
import { rateReducer } from "./rateReducer";

export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,

  user: loginUser,
  oneCategory: allCategoriesReducer,
  subscribe: allCategoriesReducer,
  subscribed: subscribedReducer,
  creators: creatorReducer,
  cards: allCardsReducer,
  search: allCardsReducer,
  user: loginUser,
  rate: rateReducer,
});
