import React from "react";
import { TextField } from "@material-ui/core";

export default class Search extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TextField title="Suche" />
      </div>
    );
  }
}
