import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import SearchBar from '../components/Home/SearchBar';
import CategoriesSlider from '../components/Home/CategoriesSlider';
import PlacesSlider from '../components/Home/PlacesSlider';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blackDark,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.TitleText}>Let's Explore Incredible India</Text>
        <SearchBar editable={false}></SearchBar>
        <CategoriesSlider></CategoriesSlider>
        <PlacesSlider></PlacesSlider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  TitleText: {
    fontFamily: FONTFAMILY.cormorantGaramond_semibold,
    fontSize: 40,
    color: COLORS.white,
    margin: SPACING.space_20,
  },
});
