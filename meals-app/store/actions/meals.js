// Constans
import { TOGGLE_FAVORITE, SET_FILTERS } from "./constants";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const setFilters = (filterSettings) => {
  return {
    type: SET_FILTERS,
    filters: filterSettings,
  };
};
