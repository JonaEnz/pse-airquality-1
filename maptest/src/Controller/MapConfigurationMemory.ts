import { Viewport } from "react-leaflet";
import { MapConfiguration } from "./MapConfiguration";

export class MapConfigurationMemory {
  static save(conf: MapConfiguration, view: Viewport) {
    localStorage.setItem("mapconf", JSON.stringify({ c: conf, v: view }));
  }
  static load(): { c: MapConfiguration; v: Viewport } {
    var j = localStorage.getItem("mapconf");
    var s = JSON.parse(j ?? "{}");
    return s;
  }
}
