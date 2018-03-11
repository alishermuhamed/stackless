import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ name, value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

TextBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

TextBox.defaultProps = {
  name: '',
  value: '',
  placeholder: ''
};

export default TextBox;
