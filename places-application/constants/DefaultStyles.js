import { Platform } from "react-native";

// Constants
import Colors from "./Colors";

export default {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
