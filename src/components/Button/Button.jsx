import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, hierarchy, ...props }) => {
  return (
    <button
      type="button"
      className={[`storybook-button--${hierarchy}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Button hierarchy */
  hierarchy: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  hierarchy: "primary",
  onClick: undefined,
};

export default Button;
