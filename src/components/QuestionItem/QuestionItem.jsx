import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.css';

const QuestionItem = ({ question, render }) => {
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
        {question.has('owner') &&
          render(
            question.getIn(['owner', 'user_id']),
            question.getIn(['owner', 'display_name']),
            question.getIn(['owner', 'profile_image'])
          )}
        <p>asked {question.get('creation_date')}</p>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.instanceOf(Map).isRequired,
  render: PropTypes.func.isRequired
};

export default QuestionItem;
