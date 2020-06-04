import React from "react";
import { Platform } from "react-native";

// Constans
import DefaultStyles from "../constants/DefaultStyles";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";

const Stack = createStackNavigator();

const PlacesStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={DefaultStyles}>
      <Stack.Screen
        name="PlacesListScreen"
        component={PlacesListScreen}
        options={(navData) => {
          return {
            headerTitle: "PlacesListScreen",
          };
        }}
      />
      <Stack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={(navData) => {
          return {
            headerTitle: "PlaceDetailScreen",
          };
        }}
      />
      <Stack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={(navData) => {
          return {
            headerTitle: "NewPlaceScreen",
          };
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={(navData) => {
          return {
            headerTitle: "MapScreen",
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default PlacesStackNavigator;
