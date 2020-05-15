import { Platform } from "react-native";

// Colors
import Colors from "./Colors";

export const DefaultStyles = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  mode: "modal",
};
