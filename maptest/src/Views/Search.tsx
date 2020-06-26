import React from "react";
import { TextField } from "@material-ui/core";
import { Feature } from "../Model/Feature";

export default class Search extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    var f = new Feature("temperature");
    console.log(f);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TextField title="Suche" placeholder="Test" />
      </div>
    );
  }
}
