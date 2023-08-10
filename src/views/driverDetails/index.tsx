import React from 'react';
import {DriverDetailsView} from './view';
import {useDriverDetailsVM} from './vm';
import {MainStackScreenProps} from 'modules/navigation/mainStackNavigator/types';

export const DriverDetails: React.FC<MainStackScreenProps<'DriverDetails'>> = ({
  route,
}) => {
  const vm = useDriverDetailsVM({route});

  return <DriverDetailsView {...vm} />;
};
