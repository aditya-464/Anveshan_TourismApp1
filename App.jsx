import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import BottomTab from './src/navigators/BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Login></Login> */}
      <BottomTab></BottomTab>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
