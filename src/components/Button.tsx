import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  /**
   * The short action label written inside the button.
   */
  content: string;
  /**
   * 3 button variants — there should be max. one "primary" button on a page.
   */
  variant: "primary" | "secondary" | "tertiary" | "destructive";
  /**
   * If the button is used to submit or reset a form, use type `submit` or `reset` respectively. The type `button` does nothing and needs to be defined with JavaScript.
   */
  type: "button" | "submit" | "reset";
  /**
   * When the action associated with a button is unavailable, the button has the attributes `aria-disabled` and `disabled` set to true.
   */
  isDisabled?: boolean;
}

/**
 * A button enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * [See the W3C doc.](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
 */
export const Button = ({
  content,
  variant,
  type,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles[variant]} ${styles.Button}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
};

Button.defaultProps = {
  content: "Click me",
  variant: "secondary",
  type: "button",
  onClick: undefined,
};
