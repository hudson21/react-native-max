import React from "react";
import { Platform } from "react-native";

// StackNavigators
import ShopStackNavigator from "./ShopStackNavigator";

// Stack Container
import { NavigationContainer } from "@react-navigation/native";

const ShopNavigatorContainer = () => (
  <NavigationContainer>
    <ShopStackNavigator />
  </NavigationContainer>
);

export default ShopNavigatorContainer;
