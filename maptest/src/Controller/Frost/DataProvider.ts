import { Station } from "../../Model/Station";
import {
  GetObservationStationFactory,
  GetObservationStationOptions,
} from "../GetObservationStationFactory";
import { Position } from "../../Model/Position";
import { FrostServer } from "./FrostServer";

export class DataProvider {
  static frostServer: FrostServer = new FrostServer();

  static getObservationStations(middle: Position, radius: number): Station[] {
    var of = new GetObservationStationFactory();
    var oo: GetObservationStationOptions = {
      middle: middle,
      radius: radius,
    };
    return DataProvider.frostServer.request(of, oo).result;
  }
}
