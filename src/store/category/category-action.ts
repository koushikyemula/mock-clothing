import {
	createAction,
	Action,
	ActionWithPayload,
	withMatcher,
} from "../../utils/reducer-utils";
import { CATEGORY_ACTION_TYPES, Category } from "./category-types";

export type FetchCategoriesStart =
	Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
	CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
	CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
	Error
>;

export const fetchCategoriesStart = withMatcher(
	(): FetchCategoriesStart =>
		createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
	(categoriesMap: Category[]): FetchCategoriesSuccess =>
		createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap)
);

export const fetchCategoriesFailed = withMatcher(
	(error: Error): FetchCategoriesFailed =>
		createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
