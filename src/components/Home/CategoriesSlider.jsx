import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';

const dummyData = [
  {
    id: 'Monuments',
    name: 'Monuments',
    active: 1,
  },
  {
    id: 'Palaces',
    name: 'Palaces',
    active: 0,
  },
  {
    id: 'Temples',
    name: 'Temples',
    active: 0,
  },
  {
    id: 'Forts',
    name: 'Forts',
    active: 0,
  },
  {
    id: 'Heritage Sites',
    name: 'Heritage Sites',
    active: 0,
  },
  {
    id: 'Sanctuaries',
    name: 'Sanctuaries',
    active: 0,
  },
  {
    id: 'Parks',
    name: 'Parks',
    active: 0,
  },
  {
    id: 'Museums',
    name: 'Museums',
    active: 0,
  },
  {
    id: 'Zoos',
    name: 'Zoos',
    active: 0,
  },
  {
    id: 'Galleries',
    name: 'Galleries',
    active: 0,
  },
  {
    id: 'Gardens',
    name: 'Gardens',
    active: 0,
  },
];

const CategoriesSlider = () => {
  const [data, setData] = useState(dummyData);

  const handleCategory = id => {
    setData(prevData => {
      return prevData.map(item => ({
        ...item,
        active: item.id === id ? 1 : 0,
      }));
    });
  };

  const FlatListItem = ({index, id, name, image, active}) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategory(id)}
        activeOpacity={0.8}
        style={[
          styles.ItemCard,
          {
            paddingLeft: index === 0 ? SPACING.space_20 : SPACING.space_30,
            paddingRight: index === data.length - 1 ? SPACING.space_20 : 0,
          },
        ]}>
        <Text
          style={[
            styles.ItemText,
            {color: active ? COLORS.white : COLORS.greyDark},
          ]}>
          {name}
        </Text>
        <View
          style={[
            styles.Highlighter,
            {backgroundColor: active ? COLORS.orange : COLORS.blackDark},
          ]}></View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.Heading}>Categories</Text>
      <FlatList
        style={styles.FlatList}
        data={data}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <FlatListItem
            index={index}
            id={item.id}
            name={item.name}
            image={item.image}
            active={item.active}></FlatListItem>
        )}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: FONTFAMILY.harmattan_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.white,
    // marginBottom: SPACING.space_10,
    paddingLeft: SPACING.space_20,
  },
  FlatList: {},
  ItemCard: {
    alignItems: 'center',
  },
  ItemText: {
    fontFamily: FONTFAMILY.cormorantInfant_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.greyLight,
    marginBottom: SPACING.space_2,
  },
  Highlighter: {
    width: 16,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
    marginTop: SPACING.space_4,
  },
});
