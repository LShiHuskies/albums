import React from 'react';
import { Text, AppRegistry, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
  titleText: {
    marginTop: '10%',
  },
});

// Create a component
const App = () => {
  const { viewStyle, titleText } = styles;
  return (
    <View style={viewStyle}>
      <Text style={titleText}>Some Text</Text>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
