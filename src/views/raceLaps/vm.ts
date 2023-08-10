import {RaceLapsTimingModel} from 'models/races';
import {useRacesMutation} from 'modules/redux/queries/races';
import React from 'react';

export interface RaceLapsVM {
  laps: RaceLapsTimingModel[];
}

export const useRaceLapsVM = (): RaceLapsVM => {
  const [apiRaceLaps] = useRacesMutation();
  const [laps, setLaps] = React.useState<RaceLapsTimingModel[]>([]);

  const handleFetchRaceLaps = React.useCallback(async () => {
    await apiRaceLaps({round: 1, lap: 1})
      .unwrap()
      .then(res => {
        setLaps(res.Laps[0].Timings);
      })
      .catch(err => console.warn(err));
  }, [apiRaceLaps]);

  React.useEffect(() => {
    handleFetchRaceLaps();
  }, [handleFetchRaceLaps]);

  return {
    laps,
  };
};
