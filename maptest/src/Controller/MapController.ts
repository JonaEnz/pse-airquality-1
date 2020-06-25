import { Viewport } from "react-leaflet";
import { Station } from "../Model/Station";
import { MapConfiguration } from "./MapConfiguration";
import { DataProvider } from "../DataProvider";
import { Position } from "../Model/Position";
import { MapPin } from "../Model/MapPin";

export class MapController {
  configuration: MapConfiguration;
  viewport: Viewport;
  constructor(view: Viewport) {
    this.configuration = new MapConfiguration();
    this.viewport = view;
  }

  handlePopup(id: string): Station {
    var s = new Station(new Position(0, 0));
    s.id = id + " +";
    return s;
  }

  handleViewportChange(viewport: Viewport) {
    this.viewport = viewport;
    DataProvider.delete();
    DataProvider.add();
  }

  getPins(): MapPin[] {
    return this.configuration.getPins(this.viewport);
  }

  getPolygons(): Station[] {
    return this.configuration.getPolygons(this.viewport);
  }

  changeFeature(feature: string): void {}
  search(searchTerm: string): void {}
  updateCurrentPosition(): void {}
}
