import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText ] = useState('Hello Hudson :D');

  return (
    <View style={styles.container}>
      <Text>{ text }</Text>
      <Button 
        title="Carlos Hudson"
        onPress={() => setText('The text has changed !! :D Again')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
