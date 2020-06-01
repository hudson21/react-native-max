import React, { useEffect, useRef } from "react";
import { CommonActions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";

// Redux
import { useSelector } from "react-redux";

// StackNavigators
import ShopMainSidevarNavigator from "./ShopMainSidevarNavigator";

const ShopNavigatorContainer = (props) => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    console.log("navRef", navRef);
    if (!isAuth) {
      navRef.current.dispatch(
        CommonActions.navigate({ routeName: "AuthScreen" })
      );
    }
  }, [isAuth]);

  return <ShopMainSidevarNavigator inneRef={navRef} />;
};


export default ShopNavigatorContainer;
