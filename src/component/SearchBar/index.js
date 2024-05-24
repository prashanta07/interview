import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SearchBar = ({
  value,
  onChangeText,
  customStyle,
  placeholder,
  handleClear,
  containerStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <View style={{...styles.searchContiner, ...containerStyle}}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={{...styles.search, ...customStyle}}
        placeholder={placeholder || 'Type here to search...'}
      />
      <CustomButton
        buttonText={'Clear'}
        onPress={handleClear}
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    padding: 10,
    width: '85%',
  },
  searchContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default SearchBar;
