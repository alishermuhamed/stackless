import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: 'Кнопка',
};

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
