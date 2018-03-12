import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
      <div>
        <img src={props.owner.profileImage} alt="Author profile" />
        <span>{props.owner.displayName}</span>
      </div>
      {props.tags && props.tags.map(tag => <span key={tag}>{tag} </span>)}
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    profileImage: PropTypes.string,
    displayName: PropTypes.string
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

Post.defaultProps = {
  title: '',
  tags: []
};

export default Post;
