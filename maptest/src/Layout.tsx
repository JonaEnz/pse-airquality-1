import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { DataProvider } from "./DataProvider";
import { Viewport } from "react-leaflet";
import { MenuItem } from "@material-ui/core";
import { render } from "@testing-library/react";
import MapView from "./Views/MapView";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  function change(viewport: Viewport) {
    DataProvider.add();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            PSE SmartAQ
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MapView />
    </div>
  );
}
