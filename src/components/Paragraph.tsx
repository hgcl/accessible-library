import React from "react";
import styles from "./Paragraph.module.css";

export interface ParagraphProps {
  /**
   * The copy written inside the paragraph.
   */
  children: string;
  /**
   * The component comes in two sizes. Use the default `m` size in most cases.
   */
  size?: "s" | "m" | "l";
  /**
   * The component comes in two weights. Use the default `regular` weight in most cases.
   */
  weight?: "regular" | "bold";
}

/**
 * TODO
 */
export const Paragraph = ({
  children,
  size,
  weight,
  ...props
}: ParagraphProps) => {
  return (
    <p className={`${styles[size]} ${styles[weight]}`} {...props}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  children: "A paragraph is a chunk of body text TODO",
  size: "m",
  weight: "regular",
};
