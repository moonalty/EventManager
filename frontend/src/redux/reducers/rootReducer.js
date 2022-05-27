import { combineReducers } from "redux";
import { allCategoriesReducer } from "./categoriesReducer";
import { loginUser } from "./userReducer"; 

export const rootReducer = combineReducers({
  categories: allCategoriesReducer,
  allCategories: allCategoriesReducer,
   user: loginUser
  
});
