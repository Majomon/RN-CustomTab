import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {RootStackParams} from '../../navigator/Tab1';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Products')}
      style={{marginHorizontal: 20, marginVertical: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ir a products </Text>
    </Pressable>
  );
};
