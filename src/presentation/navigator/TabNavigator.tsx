import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1} from './Tab1';
import {Tab2} from './Tab2';
import {StyleSheet, Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator barStyle={styles.containerTab}>
      <Tab.Screen name="Home" options={{title: 'Home'}} component={Tab1} />
      <Tab.Screen name="Search" options={{title: 'Search'}} component={Tab2} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerTab: {
    backgroundColor: 'black',
    margin: 10,
    marginHorizontal:20,
    paddingVertical: 10,
    borderRadius: 30,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    overflow:"hidden"
  },
});
