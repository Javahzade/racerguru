import {RouteProp} from '@react-navigation/native';
import {DriverModel} from 'models/drivers';
import {MainStackParamList} from 'modules/navigation/mainStackNavigator/types';
import {useDriverDetailsQuery} from 'modules/redux/queries/drivers';

interface DriverDetailsProps {
  route: RouteProp<MainStackParamList, 'DriverDetails'>;
}

export interface DriverDetailsVM {
  drivers: DriverModel[];
}

export const useDriverDetailsVM = ({
  route,
}: DriverDetailsProps): DriverDetailsVM => {
  const {driverId} = route.params;
  const {data} = useDriverDetailsQuery({driverId});
  return {
    drivers: data || [],
  };
};
