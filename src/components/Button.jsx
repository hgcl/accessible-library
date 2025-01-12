import React from "react";

/**
 * Buttons allow users to initiate an action when clicked
 */
const Button = ({ children, variant, onClick, ...props }) => {
  return (
    <button
      type="button"
      // className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "Click me",
  // TODO storybook doesn't select secondary button as default...
  variant: "secondary",
  onClick: undefined,
};

export default Button;
