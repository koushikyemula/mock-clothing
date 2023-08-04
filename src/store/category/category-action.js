import { createAction } from "../../utils/reducer-utils";
import { CATEGORY_ACTION_TYPES } from "./category-types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMap) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoryMap = await getCategoriesAndDocuments("collections");
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
