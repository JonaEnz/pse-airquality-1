import { Station } from "./Model/Station";
import { Position } from "./Model/Position";

export class DataProvider {
  static getStations(): Station[] {
    return [new Station(new Position(49, 8.4))];
  }
}
