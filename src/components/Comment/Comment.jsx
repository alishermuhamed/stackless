import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Comment.css';

const Comment = props => {
  const { score, body, owner, creationDate } = props;
  return (
    <div className="comment">
      <span>
        {score + ' ' + body}
        <Link to={`/users/${owner.userId}`} href={`/users/${owner.userId}`}>
          {owner.displayName}
        </Link>
        {creationDate}
      </span>
    </div>
  );
};

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  creationDate: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
