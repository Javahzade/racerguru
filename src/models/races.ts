export interface RaceModel {
  season: string;
  round: string;
  raceName: string;
  Laps: RaceLapsModel[];
}

export interface RaceLapsModel {
  Timings: RaceLapsTimingModel[];
}

export interface RaceLapsTimingModel {
  driverId: string;
  position: string;
  time: string;
}
