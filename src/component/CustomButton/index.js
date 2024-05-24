import {TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';

const CustomButton = ({buttonText, onPress, buttonStyle, buttonTextStyle}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <CustomText text={buttonText} textStyle={{...buttonTextStyle}} />
    </TouchableOpacity>
  );
};

export default CustomButton;
