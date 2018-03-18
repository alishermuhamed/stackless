import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../index';

const isEmpty = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const Question = ({ isFetching, error, question }) => {
  return (
    <div>
      {isFetching && isEmpty(question) && isEmpty(error) && <h2>Loading...</h2>}
      {!isFetching && isEmpty(question) && !isEmpty(error) && <h2>Error</h2>}
      {!isEmpty(question) && (
        <div>
          <Post {...question} />
          <h3>Answers</h3>
          {question.answers &&
            question.answers.map(ans => <Post key={ans.body} {...ans} />)}
        </div>
      )}
    </div>
  );
};

Question.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  question: PropTypes.object,
  error: PropTypes.object
};

Question.defaultProps = {
  question: {},
  error: {}
};

export default Question;
