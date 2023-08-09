import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
  RacerList: undefined;
};

export type MainStackScreenProps<TScreen extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, TScreen>;
