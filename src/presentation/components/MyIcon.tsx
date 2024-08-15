import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface Props {
  name: string;
  color?: string;
  white?: boolean;
  size?: number;
  style?: StyleProp<TextStyle>;
}

export const MyIcon = ({
  name,
  color,
  white = false,
  style,
  size = 30,
}: Props) => {
  return <Icon style={style} color={color} name={name} size={size} />;
};
