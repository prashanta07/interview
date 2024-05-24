import {Text} from 'react-native';
import React from 'react';

const CustomText = ({text, textStyle}) => {
  return <Text style={textStyle}>{text}</Text>;
};

export default CustomText;
