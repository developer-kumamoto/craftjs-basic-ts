// components/user/Card.js
import React, { ReactNode } from "react";
import {Text} from "./Text";
import {Button} from "./Button";
import { Element, useNode, UserComponent } from "@craftjs/core";

import { Container, ContainerDefaultProps, ContainerSettings } from "./Container";
import { Property } from "csstype";

// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export type CardTopProp = {
  children: ReactNode
}

export const CardTop: UserComponent<CardTopProp> = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={ref => connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNode) => incomingNode.data.type === Text,
  },
};

export type CardBottomProp = {
  children: ReactNode
}

export const CardBottom: UserComponent<CardBottomProp> = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={ref => connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNode) => incomingNode.data.type === Button,
  },
};

export type CardProp = {
  background?: Property.Background<string | number> | undefined;
  padding?: Property.Padding<string | number> | undefined;
};

export const Card: UserComponent<CardProp> = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        {" "}
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        {" "}
        <Button size="small" children="Learn more" />
      </Element>
    </Container>
  );
};
Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings 
    settings: ContainerSettings
  }
}