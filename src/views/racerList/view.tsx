import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {RacerListVM} from './vm';

const RacerList: React.FC<RacerListVM> = () => {
  return (
    <View>
      <Text>Racer list</Text>
    </View>
  );
};

export const RacerListView = memo(RacerList);
