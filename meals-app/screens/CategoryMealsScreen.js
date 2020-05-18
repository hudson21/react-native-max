import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

// Redux
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props) => {
  const categoryId = props.route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!displayedMeals.length) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters ?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
