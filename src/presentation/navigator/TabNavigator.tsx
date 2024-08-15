import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';
import {MyIcon} from '../components/MyIcons';
import {Tab1} from './Tab1';
import {Tab2} from './Tab2';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeIndicatorStyle={styles.activeIndicator}
      barStyle={styles.containerTab}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1':
              iconName = 'home-outline';
              break;

            case 'Tab2':
              iconName = 'search-outline';
              break;
          }
          return <MyIcon name={iconName} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Tab1"
        options={{title: 'Home', tabBarColor: 'red'}}
        component={Tab1}
      />
      <Tab.Screen name="Tab2" options={{title: 'Search'}} component={Tab2} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerTab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    backgroundColor: 'grey',
    margin: 2,
    marginHorizontal: 10,
    borderRadius: 30,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    overflow: 'hidden',
  },
  activeIndicator:{
    height:40,
  }
});
