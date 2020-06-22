import React from "react";
import { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
import { LatLng, marker } from "leaflet";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { Position } from "./Model/Position";
import { Station } from "./Model/Station";

export default class SimpleExample extends React.Component<
  { onViewChanged(viewport: Viewport): void; marker: Station[] },
  { lat: number; lng: number; zoom: number }
> {
  constructor(props: {
    onViewChanged(viewport: Viewport): void;
    marker: Station[];
  }) {
    super(props);
    this.state = {
      lat: 49,
      lng: 8.4,
      zoom: 13,
    };
  }

  render() {
    const position: [number, number] = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          onViewportChanged={this.props.onViewChanged}
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
          {this.props.marker.map((m) => (
            <Marker position={[m.position.lat, m.position.lng]}>
              <Popup>
                <button onClick={() => console.log("Hi")}>Test</button>
              </Popup>
            </Marker>
          ))}
        </Map>
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
