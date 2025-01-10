import React from "react";

const Button = ({ label, hierarchy, ...props }) => {
  return (
    <button
      type="button"
      className={[`lib-button--${hierarchy}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  hierarchy: "primary",
  onClick: undefined,
};

export default Button;
