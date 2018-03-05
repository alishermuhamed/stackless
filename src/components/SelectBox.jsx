import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  name: 'selectBox',
};

const SelectBox = ({ name, value, onChange, options }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(({ label }) => {
        return (
          <option key={label} name={name} value={label}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;

export default SelectBox;
