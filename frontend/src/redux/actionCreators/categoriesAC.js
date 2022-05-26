import { SHOW_CATEGORIES } from "../actionTypes/categoriesAT";

export const categoriesRenderAC = (payload) => {
  return {
    type: SHOW_CATEGORIES,
    payload,
  };
};
