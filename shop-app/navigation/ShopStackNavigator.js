import React from "react";
import { Platform } from "react-native";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

// Constans
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const ShopStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    }}
  >
    <Stack.Screen
      name="ProductsOverviewScreen"
      component={ProductsOverviewScreen}
      options={(navData) => {
        return {
          headerTitle: "All Products",
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
      options={(navData) => {
        return {
          headerTitle: "Cart",
        };
      }}
    />
  </Stack.Navigator>
);

export default ShopStackNavigator;
