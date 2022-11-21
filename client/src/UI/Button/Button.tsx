import React, { ReactElement } from "react";
import styles from "./Button.module.less";

type ButtonPropsType = {
  children: string | ReactElement | null;
  shape?: "cirle" | "rect";
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  shape = "rect",
  onClick,
  disabled = false,
}: ButtonPropsType) => {
  const styleShape = shape == "cirle" ? styles.Cirle : styles.Rect;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.Button + " " + styleShape}
    >
      {children}
    </button>
  );
};

export default Button;
