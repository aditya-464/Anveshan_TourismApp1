import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import SearchBar from '../components/Home/SearchBar';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blackDark,
        padding: SPACING.space_20,
      }}>
      <Text style={styles.TitleText}>Let's Explore Incredible India</Text>
      <SearchBar editable={false}></SearchBar>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  TitleText: {
    fontFamily: FONTFAMILY.cormorantGaramond_semibold,
    fontSize: 40,
    color: COLORS.white,
  },
});
