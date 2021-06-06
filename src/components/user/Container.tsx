// components/user/Container.js
import React, { ReactNode } from "react";
import { FormControl, FormLabel, Paper, Slider } from "@material-ui/core";
import { Property } from "csstype";
import { useNode, UserComponent } from "@craftjs/core";
import ColorPicker from "material-ui-color-picker";

export type ContainerProp = {
  background?: Property.Background<string | number> | undefined;
  padding?: Property.Padding<string | number> | undefined;
  children?: ReactNode;
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

export const Container: UserComponent<ContainerProp> = ({
  background,
  padding = 0,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref as HTMLElement))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};
export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          defaultValue={background || "#000"}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
