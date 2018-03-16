import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import './style.css';

const User = ({ info }) => {
  return (
    <div>
      <img src={info.get('profile_image')} alt="Avatar" />
      <p>{info.get('display_name')}</p>
      <p>questions: {info.get('questionsCount')}</p>
      <p>answers: {info.get('answersCount')}</p>
    </div>
  );
};

User.propTypes = {
  info: PropTypes.instanceOf(Map).isRequired
};
export default User;
