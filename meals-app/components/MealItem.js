import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = ({ onSelectMeal, title, duration }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: 100,
    backgroundColor: "#ccc",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default MealItem;
