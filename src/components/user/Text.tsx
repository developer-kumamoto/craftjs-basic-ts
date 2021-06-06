// components/user/Text.js
import { useNode, UserComponent } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { Property } from "csstype";
import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
export type TextProp = {
  text: String;
  fontSize?: Property.FontSize<string | number> | undefined;
  textAlign?: Property.TextAlign | undefined;
};
export const Text: UserComponent<TextProp> = ({
  text,
  fontSize,
  textAlign,
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      onClick={(e) => setEditable(true)}
    >
      <ContentEditable
        disabled={!editable}
        html={text as string}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
  },
  related: {
    settings: TextSettings,
  },
};
