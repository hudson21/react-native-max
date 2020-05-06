import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Constans
import Colors from "../constants/colors";

const MainButton = ({ children, onClick }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
