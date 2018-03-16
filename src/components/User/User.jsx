import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import './style.css';

const User = ({ info }) => {
  return (
    <div className="user">
      <img className="user__img" src={info.get('profile_image')} alt="Avatar" />
      <div className="user__container">
        <p className="user__name">{info.get('display_name')}</p>
        <p className="user__question">
            <span className="user__count"> {info.get('questionsCount')}</span> <br/>
            <span className="text">questions</span>
        </p>
        <p className="user__answer">
          <span className="user__count">{info.get('answersCount')}</span><br/>
          <span className="text">answers</span> 
        </p>
      </div>
    </div>
  );
};

User.propTypes = {
  info: PropTypes.instanceOf(Map).isRequired
};
export default User;
