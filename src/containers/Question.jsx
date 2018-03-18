import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchQuestion from '../actions/question';
import QuestionComponent from '../components/Question';
import './style.css';

class Question extends React.Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchQuestion(id));
  }

  render() {
    const { isFetching, error, question } = this.props;
    return (
      <div className = "listContent">
        <QuestionComponent
          isFetching={isFetching}
          error={error}
          question={question}
        />
      </div>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  question: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    isFetching: state.get('question').isFetching,
    error: state.get('question').error,
    question: state.get('question').item
  };
};

export default connect(mapStateToProps)(Question);
