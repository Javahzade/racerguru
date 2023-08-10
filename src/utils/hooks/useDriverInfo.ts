import {DriverModel} from 'models/drivers';
import {useDriverDetailsQuery} from 'modules/redux/queries/drivers';

export const useDriverInfo = ({
  driverId,
}: {
  driverId: string;
}): DriverModel | null => {
  const {driver} = useDriverDetailsQuery(
    {driverId},
    {
      selectFromResult: ({data}) => {
        return {
          driver: data?.[0] || null,
        };
      },
    },
  );
  return driver;
};
