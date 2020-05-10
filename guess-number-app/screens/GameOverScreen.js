import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

// Components
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

// Constans
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  return (
    <ScrollView>
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
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onClick={onRestartGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
});

export default GameOverScreen;
