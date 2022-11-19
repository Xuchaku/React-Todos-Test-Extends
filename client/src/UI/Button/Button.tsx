import React, { ReactElement } from "react";
import styles from "./Button.module.less";

type ButtonPropsType = {
  children: string | ReactElement;
};

const Button = (props: ButtonPropsType) => {
  const { children } = props;
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
