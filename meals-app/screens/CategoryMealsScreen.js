import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Categories
import { CATEGORIES, MEALS } from "../data/dummy-data";

// Components
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
      />
    );
  };

  const categoryId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
