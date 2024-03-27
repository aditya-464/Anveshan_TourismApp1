import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.TitleText}>Let's Explore Incredible India</Text>
        <SearchBar editable={false}></SearchBar>
        <Text style={{color: 'white'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          perspiciatis distinctio saepe! At quas molestiae explicabo magni optio
          nulla laudantium id consequuntur ut in. Saepe quasi minima ad cumque
          eligendi architecto ipsum laboriosam illum. Debitis ex, sequi fugiat
          possimus nobis iste repellat exercitationem hic quibusdam veniam!
          Accusamus voluptatibus repellat vitae quos! Et nostrum dolor totam
          minus deserunt reprehenderit reiciendis blanditiis cupiditate, velit
          voluptas ullam dolores commodi molestias deleniti nisi quo laudantium
          nemo alias hic a. Veniam velit qui non natus perspiciatis voluptates
          quae quisquam quod esse, fugit est dolorum, inventore officiis
          doloremque magnam consectetur error vel. Ab quibusdam rem laudantium
          velit saepe quis vel eos ullam expedita mollitia voluptate, ut est
          ipsam tempore ratione veniam enim. Quam, earum. Rem magni dolores
          voluptatum aut, voluptate placeat dignissimos ipsam iste non, amet
          nobis repudiandae velit cupiditate sint iusto, tenetur nisi assumenda.
          Obcaecati illo cupiditate consectetur quos minus blanditiis dolores
          neque repellendus perspiciatis! Odio minus quidem labore eaque.
          Excepturi, eum amet! Molestiae eum laboriosam tempora fuga aperiam
          molestias placeat culpa, repellendus accusantium nemo esse cupiditate
          nam ipsum sequi ratione deserunt magni. Odio quibusdam perferendis
          ipsum. Aliquid, aperiam laboriosam corporis itaque adipisci id, neque
          velit eveniet quia tempore nemo facere, alias illo laborum quae.
        </Text>
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
  },
});
