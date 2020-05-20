import React from "react";
import { Platform } from "react-native";

// Buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import OrdersScreen from "../screens/shop/OrdersScreen";

// Constants
import DefaultStyles from "../constants/DefaultStyles";

const Stack = createStackNavigator();

const OrdersStackNavigator = () => (
  <Stack.Navigator screenOptions={DefaultStyles}>
    <Stack.Screen
      name="OrdersScreen"
      component={OrdersScreen}
      options={(navData) => {
        return {
          headerTitle: "Your Orders",
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

export default OrdersStackNavigator;
