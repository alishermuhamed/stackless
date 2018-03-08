import React from 'react';
import PropTypes from 'prop-types';

const User = ({ image, displayName }) => {
  return (
    <React.Fragment>
      <img src={image} alt="not displayed" />
      <h3>{displayName}</h3>
    </React.Fragment>
  );
};

User.propTypes = {
  image: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};

export default User;
