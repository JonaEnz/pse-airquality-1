import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SimpleExample from "./SimpleExample";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Viewport } from "react-leaflet";

function change(viewport: Viewport) {
  console.log(viewport.center?.toString());
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleExample onViewChanged={change} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
