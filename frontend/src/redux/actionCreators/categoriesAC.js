import {
  SHOW_CATEGORIES,
  SHOW_ALL_CATEGORIES,
  ONE_CATEGORY,
  SUBSCRIBE,
} from "../actionTypes/categoriesAT";

export const showCategories = (payload) => {
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

export const oneCategoryRenderAC = (payload) => {
  return {
    type: ONE_CATEGORY,
    payload,
  };
};

export const subscribeAC = (payload) => {
  return {
    type: SUBSCRIBE,
    payload,
  };
};
