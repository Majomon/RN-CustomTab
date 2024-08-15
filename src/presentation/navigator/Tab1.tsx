import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/Homescreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
