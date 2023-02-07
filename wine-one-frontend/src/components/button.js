import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef

/**
 * A generic button
 */
function Button({ children, ...props }) {
  return (
    <button type={props.type} onClick={props.handleClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
};

export default Button;
