import { Station } from "./Model/Station";
import { Position } from "./Model/Position";

export class DataProvider {
  static getStations(): Station[] {
    //return [new Station(new Position(49, 8.4))];
    var stations: Station[];
    stations = [];
    for (let index = 0; index < 10; index++) {
      for (let index2 = 0; index2 < 10; index2++) {
        stations.push(
          new Station(new Position(48.5 + 0.1 * index, 7.9 + 0.1 * index2))
        );
      }
    }
    return stations;
  }
}
