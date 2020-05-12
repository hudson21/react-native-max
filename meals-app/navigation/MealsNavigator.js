import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

// Colors
import Colors from "../constants/Colors";

// Categories
import { CATEGORIES } from "../data/dummy-data";

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            headerTitle: "Meal Categories",
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primaryColor,
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
              headerStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.primaryColor : "",
              },
              headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primaryColor,
            };
          }}
        />
        <Stack.Screen
          name="MealDetailsScreen"
          component={MealDetailsScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
