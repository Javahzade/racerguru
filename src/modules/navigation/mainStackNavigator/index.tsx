import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RacerList} from 'views/racerList';
import {MainStackParamList} from './types';

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="RacerList" component={RacerList} />
    </MainStack.Navigator>
  );
};
