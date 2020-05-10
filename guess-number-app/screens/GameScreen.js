import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Components
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { ScreenOrientation } from "expo";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
  //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuest, setCurrentGuest] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  // The values set on the first time will remain the same until they are changed, despite the component re renders one more time
  const currentLow = useRef(1);
  const currentHight = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    // Cleaned function to remote the eventListeners
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuest === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuest, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuest < userChoice) ||
      (direction === "greater" && currentGuest > userChoice)
    ) {
      Alert.alert("Don't lie !", "You know that this is wrong ...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHight.current = currentGuest;
    } else {
      currentLow.current = currentGuest + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHight.current,
      currentGuest
    );
    setCurrentGuest(nextNumber);
    // setRounds((currentRounds) => currentRounds + 1);
    setPastGuesses((currentPastGuesses) => [
      nextNumber.toString(),
      ...currentPastGuesses,
    ]);
  };

  let listContainerStyle = styles.listContainer;

  if (availableDeviceWidth < 350) {
    listContainerStyle = styles.listContainerBig;
  }

  if (Dimensions.get("window").height < 500) {
    return (
      <View style={styles.screen}>
        <TitleText>Opponent's Guess</TitleText>
        <View style={styles.horizontalControls}>
          <MainButton onClick={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <NumberContainer>{currentGuest}</NumberContainer>
          <MainButton onClick={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
        <View style={listContainerStyle}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuest}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onClick={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onClick={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={listContainerStyle}>
        {/*
          <ScrollView contentContainerStyle={styles.listContent}>
            {pastGuesses.map((guess, index) =>
              renderListItem(guess, pastGuesses.length - index)
            )}
          </ScrollView>
        */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 400,
    maxWidth: "90%",
  },
  horizontalControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  listContainerBig: {
    width: "80%",
    flex: 1,
  },
  listContainer: {
    width: "60%",
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GameScreen;
