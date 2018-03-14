import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const QuestionAuthor = ({ userId, displayName, profileImage }) => {
  return (
    <div className="itemAuthor">
      <img src={profileImage} alt="" />
      <div className="authorDetails">
        <NavLink to={`/users/${userId}`} href={`/users/${userId}`}>
          {displayName}
        </NavLink>
      </div>
    </div>
  );
};

QuestionAuthor.propTypes = {
  userId: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default QuestionAuthor;
