import React from 'react';
import { Text, AppRegistry, StyleSheet } from 'react-native';
// import Header from './src/components/Header';

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
  },
});

// Create a component
const App = () => {
  return (
    <Text style={styles.titleText}>Some Text</Text>
  );
};
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
