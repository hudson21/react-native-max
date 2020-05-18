import React from "react";
import { Platform } from "react-native";

// StackNavigators
import ShopStackNavigator from "./ShopStackNavigator";

// Stack Container
import { NavigationContainer } from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { Ionicons } from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const ShopNavigatorContainer = () => (
  <NavigationContainer>
    <ShopStackNavigator />
  </NavigationContainer>
);

export default ShopNavigatorContainer;
