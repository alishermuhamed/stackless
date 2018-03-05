import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const defaultProps = {
  name: 'textBox',
  value: '',
  placeholder: '',
};

const TextBox = props => <input type="text" {...props} />;

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;
