import { RESTDataSource } from "@apollo/datasource-rest";
import { BusStopModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://api.xor.cl/red/"

  getBusStop(busStopId: string){
    return this.get<BusStopModel>(`bus-stop/${busStopId}`);
  }
}