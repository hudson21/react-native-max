import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

// Components
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

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

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuest, setCurrentGuest] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  // The values set on the first time will remain the same until they are changed, despite the component re renders one more time
  const currentLow = useRef(1);
  const currentHight = useRef(100);

  useEffect(() => {
    if (currentGuest === userChoice) {
      onGameOver(rounds);
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
      currentLow.current = currentGuest;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHight.current,
      currentGuest
    );
    setCurrentGuest(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuest}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuessHandler("lower")} />
        <Button title="GREATER" onPress={() => nextGuessHandler("greater")} />
      </Card>
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
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
