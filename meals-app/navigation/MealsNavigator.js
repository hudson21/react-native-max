import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Components
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";
import FavoritesScreen from "../screens/FavoritesScreen";

// Colors
import Colors from "../constants/Colors";

// Categories
import { CATEGORIES, MEALS } from "../data/dummy-data";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Meals" component={MealsNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
  </Tab.Navigator>
);

const MealsNavigator = () => (
  <Stack.Navigator
    initialRouteName="CategoriesScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      mode: "modal",
    }}
  >
    <Stack.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={{
        headerTitle: "Meal Categories",
      }}
    />
    <Stack.Screen
      name="CategoryMealsScreen"
      component={CategoryMealsScreen}
      options={(navigationData) => {
        const categoryId = navigationData.route.params.categoryId;
        const selectedCategory = CATEGORIES.find(
          (cat) => cat.id === categoryId
        );

        return {
          headerTitle: selectedCategory.title,
        };
      }}
    />
    <Stack.Screen
      name="MealDetailsScreen"
      component={MealDetailsScreen}
      options={(navigationData) => {
        const mealId = navigationData.route.params.mealId;
        const selectedMeal = MEALS.find((meal) => meal.id === mealId);

        return {
          headerTitle: selectedMeal.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log("Marked as favorite");
                }}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
  </Stack.Navigator>
);

const MealsNavigatorContainer = (props) => {
  return (
    <NavigationContainer>
      <MealsFavTabNavigator />
    </NavigationContainer>
  );
};

export default MealsNavigatorContainer;
