import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {Chatscreen} from '../screens/chat/ChatScreen';
import {PostScreen} from '../screens/post/PostScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {StyleSheet, Text} from 'react-native';
import {MyIcon} from '../components/MyIcon';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabBar, ...styles.shadow},
        headerShown: false,
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          let screenName: string = '';

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'chatbox-ellipses-outline';
              screenName = 'Home';
              break;

            case 'Chatscreen':
              iconName = 'chatbox-outline';
              screenName = 'Chat';
              break;

            case 'PostScreen':
              iconName = 'albums-outline';
              screenName = 'Post';
              break;

            case 'ProductsScreen':
              iconName = 'calculator-outline';
              screenName = 'Prod.';
              break;

            case 'SettingsScreen':
              iconName = 'settings-outline';
              screenName = 'Settings';
              break;
          }
          return (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <MyIcon
                name={iconName}
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                {screenName}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Chatscreen" component={Chatscreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="ProductsScreen" component={ProductsScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
