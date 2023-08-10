import {api} from 'services/rtkQuery';
import {DriversResponse} from './types';
import {DriverListModel, DriverModel} from 'models/drivers';

export const driversApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    drivers: builder.mutation<DriverListModel, {limit: number; offset: number}>(
      {
        query: params => ({
          url: '/f1/drivers.json',
          method: 'GET',
          params,
        }),
        transformResponse: (response: DriversResponse) => {
          const drivers = response.MRData.DriverTable.Drivers;
          const totalPage = Math.round(
            +response.MRData.total / +response.MRData.limit,
          );
          const currentPage = Math.round(
            +response.MRData.offset / +response.MRData.limit,
          );
          return {
            drivers,
            currentPage,
            totalPage,
          };
        },
      },
    ),
    driverDetails: builder.query<DriverModel[], {driverId: string}>({
      query: ({driverId}) => ({
        url: `/f1/drivers/${driverId}.json`,
        method: 'GET',
      }),
      transformResponse: (response: DriversResponse) => {
        const drivers = response.MRData.DriverTable.Drivers;
        return drivers || [];
      },
    }),
  }),
});

export const {useDriversMutation, useDriverDetailsQuery} = driversApi;
