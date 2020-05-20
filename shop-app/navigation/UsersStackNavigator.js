import React from "react";
import { Platform } from "react-native";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import UserProductsScreen from "../screens/user/UserProductsScreen";

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
        };
      }}
    />
  </Stack.Navigator>
);

export default UsersStackNavigator;
