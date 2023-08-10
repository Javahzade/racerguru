import {RaceLapsTimingModel, RaceModel} from 'models/races';
import {useRacesMutation} from 'modules/redux/queries/races';
import React from 'react';

export interface RaceLapsVM {
  raceInfo: Omit<RaceModel, 'Laps'> | null;
  laps: RaceLapsTimingModel[];
}

export const useRaceLapsVM = (): RaceLapsVM => {
  const [apiRaceLaps] = useRacesMutation();
  const [laps, setLaps] = React.useState<RaceLapsTimingModel[]>([]);
  const [raceInfo, setRaceInfo] = React.useState<Omit<
    RaceModel,
    'Laps'
  > | null>(null);

  const handleFetchRaceLaps = React.useCallback(async () => {
    await apiRaceLaps({round: 1, lap: 1})
      .unwrap()
      .then(res => {
        setRaceInfo({
          raceName: res.raceName,
          round: res.round,
          season: res.season,
        });
        setLaps(res.Laps[0].Timings);
      })
      .catch(err => console.warn(err));
  }, [apiRaceLaps]);

  React.useEffect(() => {
    handleFetchRaceLaps();
  }, [handleFetchRaceLaps]);

  return {
    laps,
    raceInfo,
  };
};
