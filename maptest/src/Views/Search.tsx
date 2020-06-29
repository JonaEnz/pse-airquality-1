import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";
import { Feature } from "../Model/Feature";
import { DataProvider } from "../Controller/Frost/DataProvider";
import { Position } from "../Model/Position";

export default class Search extends React.Component<
  { onSearch(term: string): void },
  {}
> {
  constructor(props: { onSearch(term: string): void }) {
    super(props);
    var f = new Feature("temperature");
    this.state = {};
    var stations = DataProvider.getObservationStations(new Position(49, 8), 3);
    console.log("Station 1: " + stations[0].position.getString());
  }

  keyDown(event: any) {
    event.target.value;
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <TextField onChange={this.keyDown} title="Suche" placeholder="Test" />
      </div>
    );
  }
}
