import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';

const App = () => {
  return (
    <NavigationContainer>
      <Login></Login>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
