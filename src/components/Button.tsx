import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  /**
   * TODO description
   */
  children: string;
  /**
   * TODO description
   */
  variant: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button className={`${styles[variant]} ${styles.Button}`} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "Click me",
  variant: "secondary",
};
