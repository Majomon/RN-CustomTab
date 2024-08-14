import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/search/SearchScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const Tab2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Search"
        options={{title: 'Search'}}
        component={SearchScreen}
      />
      <Stack.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};
