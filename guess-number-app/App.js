import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import { name as appName } from "./app.json";

// Components
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => App);
