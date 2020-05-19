import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// Reducers
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

// StackContainer
import ShopNavigatorContainer from "./navigation/ShopNavigatorContainer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store =
  process.env.NODE_ENV === "development"
    ? createStore(rootReducer, composeWithDevTools())
    : createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigatorContainer />
    </Provider>
  );
}
