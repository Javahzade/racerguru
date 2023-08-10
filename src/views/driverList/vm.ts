import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {QueryStatus} from '@reduxjs/toolkit/dist/query';
import {DriverListModel} from 'models/drivers';
import {MainStackParamList} from 'modules/navigation/mainStackNavigator/types';
import {useDriversMutation} from 'modules/redux/queries/drivers';
import React from 'react';

export interface DriverListVM extends DriverListModel {
  isLoading: boolean;
  isError: boolean;
  handleFetchDrivers: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  handleShowLapsPress: () => void;
  handleShowDetailsPress: (driverId: string) => void;
}

export const useDriverListVM = (): DriverListVM => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const [apiDrivers, {status}] = useDriversMutation();
  const [data, setData] = React.useState<DriverListModel>({
    drivers: [],
    currentPage: 1,
    totalPage: 1,
  });

  const handleFetchDrivers = React.useCallback(async (): Promise<void> => {
    await apiDrivers({limit: 20, offset: data.currentPage * 20})
      .unwrap()
      .then(res => setData(prev => ({...prev, ...res})))
      .catch(err => console.warn(err));
  }, [apiDrivers, data.currentPage]);

  React.useEffect(() => {
    handleFetchDrivers();
  }, [handleFetchDrivers]);

  const onPrevPage = (): void => {
    if (status === QueryStatus.fulfilled) {
      setData(prev => ({...prev, currentPage: prev.currentPage - 1}));
    }
  };
  const onNextPage = (): void => {
    if (status === QueryStatus.fulfilled) {
      setData(prev => ({...prev, currentPage: prev.currentPage + 1}));
    }
  };

  const handleShowDetailsPress = (driverId: string): void => {
    navigation.navigate('DriverDetails', {driverId});
  };

  const handleShowLapsPress = (): void => {
    navigation.navigate('RaceLaps');
  };

  return {
    ...data,
    isLoading: status === QueryStatus.pending,
    isError: status === QueryStatus.rejected,
    handleFetchDrivers,
    onPrevPage,
    onNextPage,
    handleShowLapsPress,
    handleShowDetailsPress,
  };
};
