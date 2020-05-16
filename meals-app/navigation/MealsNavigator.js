import React from "react";
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Default Styles
import { DefaultStyles } from "../constants/DefaultStyles";

// Components
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

// Colors
import Colors from "../constants/Colors";

// Categories
import { CATEGORIES, MEALS } from "../data/dummy-data";

const Stack = createStackNavigator();

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const screenOptions = (route) => ({
  tabBarLabel: route.name === "Favorites" ? "Favorites" : "Meals",
  tabBarIcon: (tabInfo) => {
    if (route.name === "Meals") {
      return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />;
    }
    if (route.name === "Favorites") {
      return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
    }
  },
  tabBarColor:
    route.name === "Meals" ? Colors.primaryColor : Colors.accentColor, // This one only applies if the shifting on android is true
  tabBarLabel:
    Platform.OS === "android" ? (
      <Text style={{ fontFamily: "open-sans-bold" }}>{route.name}</Text>
    ) : (
      route.name
    ),
});

const MealsBottomTabNavigatorIOS = () => (
  <Tab.Navigator
    screenOptions={({ route }) => screenOptions(route)}
    tabBarOptions={{
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    }}
  >
    <Tab.Screen name="Meals" component={MealsStackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
  </Tab.Navigator>
);

const MealsBottomTabNavigatorAndroid = () => (
  <Tab.Navigator
    initialRouteName="Meals"
    activeColor="white"
    shifting={true}
    screenOptions={({ route }) => screenOptions(route)}
  >
    <Tab.Screen name="Meals" component={MealsStackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
  </Tab.Navigator>
);

const FavoritesStackNavigator = () => (
  <Stack.Navigator screenOptions={DefaultStyles}>
    <Stack.Screen
      name="FavoritesScreen"
      component={FavoritesScreen}
      options={{
        headerTitle: " Your Favorites",
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

const MealsStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="CategoriesScreen"
    screenOptions={DefaultStyles}
  >
    <Stack.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={(navigationOptions) => {
        return {
          headerTitle: "Meal Categories",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navigationOptions.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        };
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

const Drawer = createDrawerNavigator();

const FiltersStackNavigator = () => (
  <Stack.Navigator screenOptions={DefaultStyles}>
    <Stack.Screen
      name="FiltersScreen"
      component={FiltersScreen}
      options={(navigationOptions) => {
        return {
          headerTitle: "Filter Meals",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Save"
                iconName="ios-save"
                onPress={() => {
                  navigationOptions.route.params.save();
                }}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navigationOptions.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
  </Stack.Navigator>
);

const MealsMainSidevarNagigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Drawer.Screen
        name="Meals"
        component={
          Platform.OS === "android"
            ? MealsBottomTabNavigatorAndroid
            : MealsBottomTabNavigatorIOS
        }
      />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const MealsNavigatorContainer = (props) => {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" ? (
        <MealsBottomTabNavigatorIOS />
      ) : (
        <MealsBottomTabNavigatorAndroid />
      )}
    </NavigationContainer>
  );
};

export default MealsMainSidevarNagigator;
