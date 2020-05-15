import React from "react";

// Categories
import { CATEGORIES, MEALS } from "../data/dummy-data";

// Components
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const categoryId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
