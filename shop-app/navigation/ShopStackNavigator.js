import React from "react";
import { Platform } from "react-native";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Components
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";

// Constans
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const ShopStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    }}
  >
    <Stack.Screen
      name="ProductsOverviewScreen"
      component={ProductsOverviewScreen}
      options={{
        headerTitle: "All Products",
      }}
    />
    <Stack.Screen
      name="ProductsDetailsScreen"
      component={ProductDetailsScreen}
      options={(navData) => {
        const producTitle = navData.route.params.producTitle;

        return {
          headerTitle: producTitle,
        };
      }}
    />
  </Stack.Navigator>
);

export default ShopStackNavigator;
