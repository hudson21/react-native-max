import React from "react";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// Stack Container
import PlacesStackNavigator from "./navigation/PlacesStackNavigator";

// Reducers
import placesReducer from "./store/places-reducer";

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
