import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  name: 'radioBox',
};

const RadioBox = ({ values, name, onChange }) => {
  return values.map(value => (
    <div key={value}>
      <input name={name} type="radio" value={value} onChange={onChange} />
      {value}
    </div>
  ));
};

RadioBox.propTypes = propTypes;
RadioBox.defaultProps = defaultProps;

export default RadioBox;
