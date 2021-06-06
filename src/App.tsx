// pages/index.js

import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { Topbar } from "./components/Topbar";

import { Container } from "./components/user/Container";
import { Button } from "./components/user/Button";
import { Card } from "./components/user/Card";
import { Text } from "./components/user/Text";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Topbar />
      <Grid container spacing={3} style={{ paddingTop: "10px" }}>
        <Grid item xs>
          <Container padding={5} background="#eee">
            <Card />
            <Button children="CLICK ME" />
            <Text text="Hi World!" />
            <Container padding={3} background="#999">
              <Text text="It's me again!"/>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Toolbox />
            <SettingsPanel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
