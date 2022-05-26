import { SHOW_CATEGORIES } from "../actionTypes/categoriesAT";

export const showCategories = (payload) => {
  return {
    type: SHOW_CATEGORIES,
    payload,
  };
};
