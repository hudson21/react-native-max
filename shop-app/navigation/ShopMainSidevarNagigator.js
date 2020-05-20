import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// StackNavigators
import ShopStackNavigator from "./ShopStackNavigator";
import OrdersStackNavigator from "./OrdersStackNavigator";
import UsersStackNavigator from "./UsersStackNavigator";

// Constants
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const ordersIcon = Platform.OS === "android" ? "md-list" : "ios-list";
const cartIcon = Platform.OS === "android" ? "md-cart" : "ios-cart";
const adminIcon = Platform.OS === "android" ? "md-create" : "ios-create";

const ShopMainSidevarNagigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={(navData) => {
        let icon;

        if (navData.route.name === "Orders") {
          icon = ordersIcon;
        } else if (navData.route.name === "Shop") {
          icon = cartIcon;
        } else {
          icon = adminIcon;
        }

        return {
          drawerIcon: (drawerConfig) => {
            return (
              <Ionicons name={icon} size={23} color={drawerConfig.color} />
            );
          },
        };
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen name="Shop" component={ShopStackNavigator} />
      <Drawer.Screen name="Orders" component={OrdersStackNavigator} />
      <Drawer.Screen name="Admin" component={UsersStackNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default ShopMainSidevarNagigator;
