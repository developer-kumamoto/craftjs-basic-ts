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
import { Editor, Frame, Element } from "@craftjs/core";
export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Topbar />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button children="CLICK ME" />
                <Text text="Hi World!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
