import React from 'react';
import PropTypes from 'prop-types';

const QuestionListRowItem = ({
  user,
  votes,
  answerCount,
  viewCount,
  title,
  lastActivityDate
}) => {
  return (
    <div>
      <user />
      <h4>{votes}</h4>
      <h4>{answerCount}</h4>
      <h4>{viewCount}</h4>
      <h4>{title}</h4>
      <h4>{lastActivityDate}</h4>
    </div>
  );
};

QuestionListRowItem.propTypes = {
  user: PropTypes.node.isRequired,
  votes: PropTypes.number.isRequired,
  answerCount: PropTypes.number.isRequired,
  viewCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  lastActivityDate: PropTypes.string.isRequired
};

export default QuestionListRowItem;
