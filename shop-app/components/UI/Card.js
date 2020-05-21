import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    // Shadow only works for IOS
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // elevation for Android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Card;
