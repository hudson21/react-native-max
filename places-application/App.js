import React from "react";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// DB
import { init } from "./helpers/db";

// Stack Container
import PlacesStackNavigator from "./navigation/PlacesStackNavigator";

// Reducers
import placesReducer from "./store/places-reducer";

init()
  .then(() => {
    console.log("Initialized Database");
  })
  .catch((error) => {
    console.log("Initializing DB Failed");
    console.log("error", error);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesStackNavigator />
    </Provider>
  );
}
