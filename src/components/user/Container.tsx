// components/user/Container.js
import React, { ReactNode } from "react";
import { Paper } from "@material-ui/core";
import { Property } from "csstype";
import { UserComponent } from "@craftjs/core";

export type ContainerProp = {
  background?: Property.Background<string | number> | undefined;
  padding?: Property.Padding<string | number> | undefined;
  children: ReactNode;
};

export const Container: UserComponent<ContainerProp> = ({
  background,
  padding = 0,
  children,
}) => {
  return (
    <Paper style={{ margin: "5px 0", background, padding: `${padding}px` }}>
      {children}
    </Paper>
  );
};
