import { Viewport } from "react-leaflet";
import { Station } from "../Model/Station";
import { DataProvider } from "../DataProvider";
import { Position } from "../Model/Position";
import { MapPin } from "../Model/MapPin";

export class MapConfiguration {
  getPins(port: Viewport): MapPin[] {
    var p = port.center ?? [0, 0];
    var pos: Position = new Position(p[0], p[1]);
    return DataProvider.getLatestObservations(pos, 0, "");
  }
  getPolygons(port: Viewport): Station[] {
    return [];
  }
  getScale(): string {
    return "";
  }
  getFeatures(): string[] {
    return ["Feature1"];
  }
}
