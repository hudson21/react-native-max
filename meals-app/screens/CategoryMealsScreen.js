import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// Categories
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Categories Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title={"Go to Details"}
        onPress={() => {
          props.navigation.navigate("MealDetailsScreen");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
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
