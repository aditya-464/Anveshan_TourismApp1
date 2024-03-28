import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/Theme';

const SearchBar = props => {
  const {editable} = props;
  const [value, setValue] = useState('Find your destination...');
  return (
    <TouchableOpacity activeOpacity={1} style={styles.SearchBar}>
      <AntDesign name="search1" size={20} color={COLORS.greyDark}></AntDesign>
      <TextInput
        editable={editable}
        style={styles.SearchText}
        value={value}
        onChangeText={text => setValue(text)}></TextInput>
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: COLORS.blackLight,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: SPACING.space_15,
    marginHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  SearchText: {
    fontFamily: FONTFAMILY.harmattan_regular,
    fontSize: 18,
    color: COLORS.greyDark,
    marginLeft: SPACING.space_10,
  },
});
