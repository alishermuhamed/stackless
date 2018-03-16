import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import fetchQuestions from '../actions/questions';
import { QuestionsList } from '../components';
import {
  getErrorMessage,
  getIsFetching,
  getQuestions,
  getSortParams
} from '../selectors/questions';

class Questions extends React.Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    sortParams: PropTypes.instanceOf(Map),
    questions: PropTypes.instanceOf(List)
  };

  static defaultProps = {
    error: undefined,
    sortParams: Map(),
    questions: List()
  };

  componentDidMount() {
    const { fetchQuestions, sortParams } = this.props;
    fetchQuestions(sortParams);
  }

  render() {
    const { questions, error, isFetching } = this.props;

    return (
      <div>
        <QuestionsList
          questions={questions}
          errorMessage={error}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  error: getErrorMessage(state),
  sortParams: getSortParams(state),
  questions: getQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (...params) => dispatch(fetchQuestions(...params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
