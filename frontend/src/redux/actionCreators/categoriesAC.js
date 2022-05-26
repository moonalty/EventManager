import { SHOW_CATEGORIES, SHOW_ALL_CATEGORIES} from "../actionTypes/categoriesAT";

export const categoriesRenderAC = (payload) => {
  return {
    type: SHOW_CATEGORIES,
    payload,
  };
};

export const categoriesAllRenderAC = (payload) => {
  return {
    type: SHOW_ALL_CATEGORIES,
    payload,
  };
};
