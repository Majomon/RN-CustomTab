import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/Homescreen';
import {SearchScreen} from '../screens/search/SearchScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={SearchScreen} />
    </Stack.Navigator>
  );
};
