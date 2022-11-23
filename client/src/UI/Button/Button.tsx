import React, { ReactElement } from "react";
import { classes } from "../../utils";
import styles from "./Button.module.less";

type ButtonPropsType = {
  children: string | ReactElement | null;
  shape?: "circle" | "rect";
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  shape = "rect",
  onClick,
  disabled = false,
}: ButtonPropsType) => {
  const styleShape = shape == "circle" ? styles.Cirle : styles.Rect;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes(styles.Button, styleShape)}
    >
      {children}
    </button>
  );
};

export default Button;
