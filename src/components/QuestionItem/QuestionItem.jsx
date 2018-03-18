import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.css';

const QuestionItem = ({ question, user, render }) => {
  return (
    <div className="listItem">
      <div className="statsContainer">
        <div className="itemCounter">
          <strong>{question.get('score')}</strong>
          <br />
          votes
        </div>
        <div className="itemCounter">
          <strong>{question.get('answer_count')}</strong>
          <br />
          answers
        </div>
      </div>
      <div className="summaryContainer">
        <h2 className="title">
          <NavLink
            to={`/questions/${question.get('question_id')}`}
            href={`/questions/${question.get('question_id')}`}
          >
            {question.get('title')}
          </NavLink>
        </h2>
        {console.log(user)}
        {user && render(user)}
        <p>asked {question.get('creation_date')}</p>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.instanceOf(Map).isRequired,
  user: PropTypes.instanceOf(Map),
  render: PropTypes.func.isRequired
};

QuestionItem.defaultProps = {
  user: undefined
};

export default QuestionItem;
