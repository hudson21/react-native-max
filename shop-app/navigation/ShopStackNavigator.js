import React from "react";
import { Platform } from "react-native";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import AuthScreen from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

// Constants
import DefaultStyles from "../constants/DefaultStyles";

const Stack = createStackNavigator();

const ShopStackNavigator = () => (
  <Stack.Navigator screenOptions={DefaultStyles}>
    <Stack.Screen
      name="StartupScreen"
      component={StartupScreen}
      options={(navData) => {
        return {
          headerTitle: "",
        };
      }}
    />
    <Stack.Screen
      name="AuthScreen"
      component={AuthScreen}
      options={(navData) => {
        return {
          headerTitle: "Authenticate",
        };
      }}
    />
    <Stack.Screen
      name="ProductsOverviewScreen"
      component={ProductsOverviewScreen}
      options={(navData) => {
        return {
          headerTitle: "All Products",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navData.navigation.navigate("CartScreen");
                }}
              />
            </HeaderButtons>
          ),
        };
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
    <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerTitle: "Your Cart",
      }}
    />
  </Stack.Navigator>
);

export default ShopStackNavigator;
