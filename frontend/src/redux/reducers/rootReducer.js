import { combineReducers } from "redux";
import { allCardsReducer } from "./cardsReducer";
import { allCategoriesReducer } from "./categoriesReducer";
import { creatorReducer } from "./creatorReduser";
import { loginUser } from "./userReducer";
import {orgCardsReducer} from './orgCardsReducer'
import { subscribedReducer } from "./subscribedReducer";
import { rateReducer } from "./rateReducer";
import { welcomeReducer } from "./welcomeReducer";
import { changeStateCardsReducer } from "./changeStateCardsReducer";

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
  rate: rateReducer,
  orgCards: orgCardsReducer,
  welcome: welcomeReducer,
  change: changeStateCardsReducer
});
