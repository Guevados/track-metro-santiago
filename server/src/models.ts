export type BusStopModel = {
  id: string;
  name: string;
  status_code: number;
  status_description: string;
  services: ServicesModel[];
}

export type ServicesModel = {
  id: string;
  valid: boolean;
  status_description: string;
  buses: BusesModel[];
}

export type BusesModel = {
  id: string;
  meters_distance: number;
  min_arrival_time: number;
  max_arrival_time: number;
}

