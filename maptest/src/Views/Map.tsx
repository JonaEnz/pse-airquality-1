import React from "react";
import { Viewport, TileLayer, Popup, Marker } from "react-leaflet";
import { MapPin } from "../Model/MapPin";
import { Station } from "../Model/Station";
import { Position } from "../Model/Position";
import { Polygon } from "../Model/Polygon";
import Chart from "react-google-charts";
import { Button } from "@material-ui/core";
import { Map as LeafletMap } from "react-leaflet";

export default class Map extends React.Component<
  {
    pins: MapPin[];
    polygons: Polygon[];
    onViewportChange(viewport: Viewport): void;
    popup(mp: MapPin): Station;
  },
  {
    position: Position;
    zoom: number;
    selectedStation: Station | null;
    pins: MapPin[];
  }
> {
  constructor(props: {
    pins: MapPin[];
    polygons: Polygon[];
    onViewportChange(viewport: Viewport): void;
    popup(mp: MapPin): Station;
  }) {
    super(props);
    console.log(props);
    this.state = {
      position: new Position(49, 8.4),
      zoom: 10,
      pins: [],
      selectedStation: null,
    };
  }

  onViewChanged(viewport: Viewport) {
    this.props.onViewportChange(viewport);
    this.setState({ zoom: this.state.zoom });
  }

  popup(mp: MapPin) {
    var s = this.props.popup(mp);
    console.log(s);
    this.setState({ selectedStation: s });
  }

  render() {
    const position: [number, number] = [
      this.state.position.lat,
      this.state.position.lng,
    ];
    return (
      <div>
        <LeafletMap
          center={position}
          zoom={this.state.zoom}
          onViewportChange={(v) => this.onViewChanged(v)}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {this.props.pins.map((m) => (
            <Marker position={[m.getPosition().lat, m.getPosition().lng]}>
              <Popup onOpen={() => this.popup(m)}>
                <Button variant="contained" color="primary">
                  {this.state.selectedStation
                    ? this.state.selectedStation.id
                    : "Null"}
                </Button>
              </Popup>
            </Marker>
          ))}
        </LeafletMap>
        <Chart
          width={400}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses"],
            ["2013", 1000, 400],
            ["2014", 1170, 460],
            ["2015", 660, 1120],
            ["2016", 1030, 540],
          ]}
          options={{
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "50%", height: "70%" },
            // lineWidth: 25
          }}
        />
      </div>
    );
  }
}
