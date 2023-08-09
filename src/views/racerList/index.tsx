import React from 'react';
import {RacerListView} from './view';
import {useRacerListVM} from './vm';

export const RacerList: React.FC = () => {
  const vm = useRacerListVM();

  return <RacerListView {...vm} />;
};
