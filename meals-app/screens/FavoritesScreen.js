import React from "react";

// Components
import MealList from "../components/MealList";

// Constants
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
