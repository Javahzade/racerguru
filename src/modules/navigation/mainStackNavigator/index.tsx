import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {DriverList} from 'views/driverList';
import {MainStackParamList} from './types';
import {DriverDetails} from 'views/driverDetails';
import {RaceLaps} from 'views/raceLaps';

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="DriverList">
      <MainStack.Screen name="DriverList" component={DriverList} />
      <MainStack.Screen name="DriverDetails" component={DriverDetails} />
      <MainStack.Screen name="RaceLaps" component={RaceLaps} />
    </MainStack.Navigator>
  );
};
