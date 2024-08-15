import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { TabNavigator } from './presentation/navigator/TabNavigator';

export const CustomTabApp = () => {

  
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
