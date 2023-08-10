import {DriverModel} from 'models/drivers';
import {RaceModel} from 'models/races';

export interface DriversResponse {
  MRData: {
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      Drivers: DriverModel[];
    };
  };
}

export interface RaceLapsResponse {
  MRData: {
    RaceTable: {
      Races: RaceModel[];
    };
  };
}
