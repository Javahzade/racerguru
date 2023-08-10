export interface DriverModel {
  url: string;
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriverListModel {
  drivers: DriverModel[];
  currentPage: number;
  totalPage: number;
}
