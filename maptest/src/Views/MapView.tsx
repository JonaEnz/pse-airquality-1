import React from "react";
import { MapController } from "../Controller/MapController";
import Map from "../Views/Map";
import { Viewport } from "react-leaflet";
import { MapPin } from "../Model/MapPin";
import { Station } from "../Model/Station";
import Search from "./Search";

export default class MapView extends React.Component<{}, {}> {
  controller: MapController;

  constructor(props: {}) {
    super(props);
    this.controller = new MapController({
      center: [49, 8.4],
      zoom: 10,
    });
    this.state = {};
  }

  onViewChange(viewport: Viewport) {
    this.controller.handleViewportChange(viewport);
    this.setState({});
  }

  popup(mp: MapPin): Station {
    var s = this.controller.handlePopup(mp.getStationId());
    return s;
  }

  onSearch() {}

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <Map
          pins={this.controller.getPins()}
          polygons={this.controller.getPolygons()}
          onViewportChange={(v) => this.onViewChange(v)}
          popup={(mp) => this.popup(mp)}
        />
      </div>
    );
  }
}
