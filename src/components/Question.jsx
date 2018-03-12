import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Post from './Post';

const Question = ({ question }) => {
  const { isFetching, title, body, owner, tags, answers } = question;
  return (
    <div>
      {isFetching && !title && <h2>Loading...</h2>}
      {!isFetching && !title && <h2>No such question</h2>}
      {title && (
        <div>
          <Post title={title} body={body} owner={owner} tags={tags} />
          <h3>Answers</h3>
          {answers.map(ans => <Post {...ans} />)}
        </div>
      )}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    owner: PropTypes.shape({
      profileImage: PropTypes.string,
      dispayName: PropTypes.string
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    answers: PropTypes.array
  }).isRequired
};

export default Question;
