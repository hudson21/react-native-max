import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

// Redux
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favoriteMeals.length || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
