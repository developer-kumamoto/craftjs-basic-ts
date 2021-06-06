// components/user/Text.js
import { useNode, UserComponent } from "@craftjs/core";
import { Property } from "csstype";
import React from "react";
export type TextProp = {
  text: String;
  fontSize?: Property.FontSize<string | number> | undefined;
};
export const Text: UserComponent<TextProp> = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref as HTMLElement))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
