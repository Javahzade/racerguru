import React from 'react';
import {DriverListView} from './view';
import {useDriverListVM} from './vm';

export const DriverList: React.FC = () => {
  const vm = useDriverListVM();

  return <DriverListView {...vm} />;
};
