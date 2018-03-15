import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchQuestion from '../actions/question';
import QuestionComponent from '../components/Question';

class Question extends React.Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchQuestion(id));
  }

  render() {
    const { isFetching, error, question } = this.props;
    return (
      <QuestionComponent
        isFetching={isFetching}
        error={error}
        question={question}
      />
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

const mapStateToProps = ({ question }, ownProps) => {
  return {
    id: ownProps.match.params.id,
    isFetching: question.isFetching,
    error: question.error,
    question: question.item
  };
};

export default connect(mapStateToProps)(Question);
