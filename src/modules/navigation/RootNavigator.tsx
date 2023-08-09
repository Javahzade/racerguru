import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStackNavigator} from './mainStackNavigator';

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
