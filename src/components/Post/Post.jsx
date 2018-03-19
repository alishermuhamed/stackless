import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Comment } from '../index';
import parseUnixTimeStamp from '../../utils';
import './Post.css';

const Post = props => {
  return ( <div className="question">
    <div className={props.isAccepted ? 'is-accepted' : ''}>
      {props.title && <h2 className="title">{props.title}</h2>}
      <h3 className="score">{'Score: ' + props.score}</h3>
      <div className="body" dangerouslySetInnerHTML={{ __html: props.body }} />
      {/* Replace with Owner component */}
      <div className="author">
        <img className="author__avatar"src={props.owner.profileImage} alt="Author profile" />
        <span className="author__info">
          <Link
            to={`/users/${props.owner.userId}`}
            href={`/users/${props.owner.userId}`}
          >
            {props.owner.displayName}
          </Link>
          {parseUnixTimeStamp(props.creationDate)}
        </span>
      </div>
      <div>
        {props.comments.length > 0 &&
          props.comments.map(com => <Comment key={com.body} {...com} />)}
      </div>
      <div className="tags">
        {props.tags.length > 0 &&
          props.tags.map(tag => (
            <Link
              className="tag"
              key={tag}
              to={`/tags/${tag}`}
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
      </div>
    </div>
    </div>
    
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  isAccepted: PropTypes.bool,
  creationDate: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    profileImage: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.string)
};

Post.defaultProps = {
  title: '',
  isAccepted: false,
  comments: [],
  tags: []
};

export default Post;
