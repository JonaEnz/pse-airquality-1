import { Station } from "./Model/Station";
import { MapPin } from "./Model/MapPin";
import { Position } from "./Model/Position";

export class DataProvider {
  static stations: Station[] = [];

  static getLatestObservations(
    center: Position,
    radius: number,
    feature: string
  ): MapPin[] {
    var res: MapPin[] = [];
    for (let index = 0; index < 10; index++) {
      for (let index2 = 0; index2 < 10; index2++) {
        var p: Position = new Position(
          center.lat + 0.1 * index,
          center.lng + 0.1 * index2
        );
        res.push(new MapPin(p, ""));
      }
    }
    return res;
  }

  static getStations(): Station[] {
    //return [new Station(new Position(49, 8.4))];
    return DataProvider.stations;
  }

  static delete() {
    DataProvider.stations = [];
  }

  static add() {
    for (let index = 0; index < 10; index++) {
      for (let index2 = 0; index2 < 10; index2++) {
        DataProvider.stations.push(
          new Station(new Position(48.5 + 0.1 * index, 7.9 + 0.1 * index2))
        );
      }
    }
  }
}
