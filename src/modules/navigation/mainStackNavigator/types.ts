import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
  DriverList: undefined;
  DriverDetails: {
    driverId: string;
  };
  RaceLaps: undefined;
};

export type MainStackScreenProps<TScreen extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, TScreen>;
