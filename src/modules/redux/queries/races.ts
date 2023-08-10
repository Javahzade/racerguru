import {api} from 'services/rtkQuery';
import {RaceLapsResponse} from './types';
import {RaceModel} from 'models/races';

export const racesApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    races: builder.mutation<RaceModel, {round: number; lap: number}>({
      query: ({round, lap}) => ({
        url: `/f1/current/${round}/laps/${lap}.json`,
        method: 'GET',
      }),
      transformResponse: (response: RaceLapsResponse) =>
        response.MRData.RaceTable.Races[0] || [],
    }),
  }),
});

export const {useRacesMutation} = racesApi;
