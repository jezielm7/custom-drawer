import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200EE',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});