import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
    </Stack.Navigator>
  );
};
