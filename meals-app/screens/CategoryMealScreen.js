import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meal Screen</Text>
      <Button
        title={"Go to Details"}
        onPress={() => {
          props.navigation.navigate("MealDetailsScreen");
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

export default CategoryMealScreen;