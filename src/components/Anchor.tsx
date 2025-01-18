import React from "react";
import styles from "./Anchor.module.css";

export interface AnchorProps {
  /**
   * The copy of the hyperlink.
   */
  content: string;
  /**
   * The URL of the hyperlink.
   */
  url: string;
  /**
   * If true, the hyperlink will be open in a new tab. WCAG 2 recommends avoiding opening links in new tabs or windows, when not necessary.
   */
  opensNewTab?: boolean;
}

/**
 * An anchor represents a hyperlink, and is labeled by its contents. [See the W3C doc.](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)
 */
export const Anchor = ({
  content,
  url,
  opensNewTab,
  ...props
}: AnchorProps) => {
  return (
    <a
      href={url}
      className={styles.Anchor}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer noopener" : undefined}
      {...props}
    >
      {content}
    </a>
  );
};

Anchor.defaultProps = {
  content: "click this link",
  url: "#",
};
