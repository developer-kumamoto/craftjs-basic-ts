// components/user/Text.js
import { UserComponent } from "@craftjs/core";
import { Property } from "csstype";
import React from "react";
export type TextProp = {
  text: String;
  fontSize?: Property.FontSize<string | number> | undefined;
};
export const Text: UserComponent<TextProp> = ({ text, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
