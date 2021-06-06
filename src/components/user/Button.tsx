// components/user/Button.js
import { useNode, UserComponent } from "@craftjs/core";
import { Button as MaterialButton, PropTypes } from "@material-ui/core";
import { ReactNode } from "react";

export type ButtonProp = {
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: PropTypes.Color | undefined;
  children: ReactNode;
};

export const Button: UserComponent<ButtonProp> = ({
  size,
  variant,
  color,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref as HTMLElement))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};
