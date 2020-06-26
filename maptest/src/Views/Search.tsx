import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";
import { Feature } from "../Model/Feature";

export default class Search extends React.Component<
  { onSearch(term: string): void },
  {}
> {
  constructor(props: { onSearch(term: string): void }) {
    super(props);
    var f = new Feature("temperature");
    this.state = {};
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
