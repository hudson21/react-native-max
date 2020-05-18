import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

// Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// Reducers
import productsReducer from "./store/reducers/products";

// StackContainer
import ShopNavigatorContainer from "./navigation/ShopNavigatorContainer";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigatorContainer />
    </Provider>
  );
}
