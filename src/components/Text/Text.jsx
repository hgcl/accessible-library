import React from "react";
import PropTypes from "prop-types";

export default function Text({ copy }) {
  return <div>{copy}</div>;
}

Text.propTypes = {
  /** Text contents */
  copy: PropTypes.string.isRequired,
};
