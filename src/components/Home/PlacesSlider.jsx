import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';

const dummyData = [
  {
    id: 1,
    name: 'Victoria Memorial',
    location: 'Kolkata, West Bengal',
    image: require('../../assets/images/victoria.jpeg'),
  },
  {
    id: 2,
    name: 'Bangalore Palace',
    location: 'Bangalore, Karnata',
    image: require('../../assets/images/bangalore-palace.jpeg'),
  },
  {
    id: 3,
    name: 'Jaisalmer Fort',
    location: 'Jaisalmer, Rajasthan',
    image: require('../../assets/images/jaisalmer-fort.jpeg'),
  },
];

const PlacesSlider = () => {
  const FlatListItem = ({index, id, name, location, image}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.PlaceCard,
          {
            marginLeft: index === 0 ? SPACING.space_20 : SPACING.space_30,
            marginRight: index === dummyData.length - 1 ? SPACING.space_20 : 0,
          },
        ]}>
        <ImageBackground style={styles.ImageBackground} source={image}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            style={styles.LinearGradient}>
            <Text style={styles.Name}>{name}</Text>
            <View style={styles.LocationInfo}>
              <Ionicons
                name="location-sharp"
                size={16}
                color={COLORS.orange}></Ionicons>
              <Text style={styles.LocationText}>{location}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: SPACING.space_20}}>
      <FlatList
        data={dummyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <FlatListItem
            index={index}
            id={item.id}
            name={item.name}
            location={item.location}
            image={item.image}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
};

export default PlacesSlider;

const styles = StyleSheet.create({
  PlaceCard: {
    // width: Dimensions.get('screen').width * 0.6,
    // height: Dimensions.get('screen').width * 0.7,
    width: 215,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'flex-end',
  },
  LinearGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: SPACING.space_10,
  },
  Name: {
    fontFamily: FONTFAMILY.cormorantGaramond_medium,
    fontSize: FONTSIZE.size_20,
    color: COLORS.white,
  },
  LocationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LocationText: {
    fontFamily: FONTFAMILY.harmattan_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.greyLight,
    marginLeft: SPACING.space_4,
  },
});
