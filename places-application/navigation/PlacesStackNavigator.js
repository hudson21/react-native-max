import React from "react";
import { Platform } from "react-native";

// Components
import CustomHeaderButton from "../components/CustomHeaderButton";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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
            headerTitle: "All Places",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Add Place"
                  iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                  onPress={() => {
                    navData.navigation.navigate("NewPlaceScreen", {
                      pickedLocation: "",
                    });
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={(navData) => {
          return {
            headerTitle: navData.route.params.placeTitle,
          };
        }}
      />
      <Stack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={(navData) => {
          return {
            headerTitle: "Add Place",
          };
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={(navData) => {
          const readonly = navData.route.params.readonly;
          if (readonly) {
            return {
              headerTitle: "Wath Your Selected Location",
            };
          }

          return {
            headerTitle: "Select Your Location",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Select Location"
                  iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
                  onPress={() => {
                    navData.route.params.saveLocation();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default PlacesStackNavigator;
