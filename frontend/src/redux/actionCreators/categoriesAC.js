import {
  SHOW_CATEGORIES,
  SHOW_ALL_CATEGORIES,
  ONE_CATEGORY,
  SUBSCRIBE,
  DELETE_CARD,
  FILTER_CATEGORIES,
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

export const deleteCardAC = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const filterCategoriesAC = (payload) => {
  return {
    type: FILTER_CATEGORIES,
    payload,
  };
};
