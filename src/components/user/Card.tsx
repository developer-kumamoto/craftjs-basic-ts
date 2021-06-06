// components/user/Card.js
import React  from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container, ContainerProp } from "./Container";
import { UserComponent } from "@craftjs/core";
import { Property } from "csstype";

export type CardProp = {
    background?: Property.Background<string | number> | undefined;
    padding?: Property.Padding<string | number> | undefined;
  };
export const Card: UserComponent<CardProp> = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only">
        <Button size="small" children="Learn more" variant="contained" color="primary" />
      </div>
    </Container>
  )
}
