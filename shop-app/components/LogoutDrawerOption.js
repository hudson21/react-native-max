import React from "react";
import { Button } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// Constants
import Colors from "../constants/Colors";

// Redux
import { useDispatch } from "react-redux";

// Actions
import * as authActions from "../store/actions/auth";

const LogoutDrawerOption = (props) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Button
        title="Logout"
        color={Colors.primary}
        onPress={() => {
          dispatch(authActions.logout());
          props.navigation.navigate("AuthScreen");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default LogoutDrawerOption;
