import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchQuestions } from '../actions/questions';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty.</h2>}
        {items.length > 0 && (
          <div>
            {items.map(i => (
              <div key={i['question_id']}>
                <Link to={`/${i['question_id']}`} href={`/${i['question_id']}`}>
                  {i.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

QuestionsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default QuestionsList;
