import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/pages/Pagina1Screen';
import {Pagina2Screen} from '../screens/pages/Pagina2Screen';
import {Pagina3Screen} from '../screens/pages/Pagina3Screen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
    </Stack.Navigator>
  );
};
