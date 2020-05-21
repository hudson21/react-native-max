import React from "react";
import { Platform } from "react-native";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

// Constants
import DefaultStyles from "../constants/DefaultStyles";

const Stack = createStackNavigator();

const UsersStackNavigator = () => (
  <Stack.Navigator screenOptions={DefaultStyles}>
    <Stack.Screen
      name="UserProductsScreen"
      component={UserProductsScreen}
      options={(navData) => {
        return {
          headerTitle: "Your Products",
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
                title="Add"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() => {
                  navData.navigation.navigate("EditProductScreen", {
                    productId: "",
                  });
                }}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
    <Stack.Screen
      name="EditProductScreen"
      component={EditProductScreen}
      options={(navData) => {
        const submitHandler = navData.route.params.submitHandler;
        const { productId } = navData.route.params;

        return {
          headerTitle: productId ? "Edit Product" : "Add Product",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName={
                  Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
                }
                onPress={submitHandler}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
  </Stack.Navigator>
);

export default UsersStackNavigator;
