import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

// Components
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

// Constans
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/images/success.png")}
          fadeDuration={1000}
          source={{
            uri:
              "https://preview.redd.it/qo2ncorq8w331.jpg?auto=webp&s=6cdb2ec834dec3f4d9616f976c60b21a84b47484",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <Button title="NEW GAME" onPress={onRestartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});

export default GameOverScreen;
