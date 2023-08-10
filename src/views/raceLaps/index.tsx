import React from 'react';
import {RaceLapsView} from './view';
import {useRaceLapsVM} from './vm';

export const RaceLaps: React.FC = () => {
  const vm = useRaceLapsVM();
  return <RaceLapsView {...vm} />;
};
