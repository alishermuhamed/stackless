import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { QuestionAuthor } from '../index';
import './style.css';

const QuestionItem = ({ item }) => {
  return (
    <div className="listItem">
      <div className="statsContainer">
        <div className="itemCounter">
          <strong>{item.get('score')}</strong>
          <br />
          votes
        </div>
        <div className="itemCounter">
          <strong>{item.get('answer_count')}</strong>
          <br />
          answers
        </div>
      </div>
      <div className="summaryContainer">
        <h2 className="title">
          <NavLink
            to={`/questions/${item.get('question_id')}`}
            href={`/questions/${item.get('question_id')}`}
          >
            {item.get('title')}
          </NavLink>
        </h2>
        <QuestionAuthor
          userId={item.getIn(['owner', 'user_id'])}
          displayName={item.getIn(['owner', 'display_name'])}
          profileImage={item.getIn(['owner', 'profile_image'])}
        />
        <p>asked {item.get('creation_date')}</p>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
};

QuestionItem.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired
};

export default QuestionItem;
