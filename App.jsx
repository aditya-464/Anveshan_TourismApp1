import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import BottomTab from './src/navigators/BottomTab';
import {COLORS} from './src/theme/Theme';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.blackDark}
        barStyle={'light-content'}></StatusBar>
      {/* <Login></Login> */}
      <BottomTab></BottomTab>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
