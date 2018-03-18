import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import fetchQuestions from '../actions/questions';
import { QuestionsList } from '../components';
import {
  getErrorMessage,
  getIsFetching,
  getSortParams,
  getQuestionsList,
  getUsers
} from '../selectors/questions';

class Questions extends React.Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    sortParams: PropTypes.instanceOf(Map).isRequired,
    questions: PropTypes.instanceOf(Map).isRequired,
    users: PropTypes.instanceOf(Map)
  };

  static defaultProps = {
    error: undefined,
    users: Map()
  };

  componentDidMount() {
    const { fetchQuestions, sortParams } = this.props;
    fetchQuestions(sortParams);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchQuestions, sortParams } = this.props;
    nextProps.sortParams !== sortParams && fetchQuestions(nextProps.sortParams);
  }

  render() {
    const { questions, users, error, isFetching } = this.props;

    return (
      <div>
        <QuestionsList
          questions={questions}
          users={users}
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
  questions: getQuestionsList(state),
  users: getUsers(state)
});

export default connect(mapStateToProps, { fetchQuestions })(Questions);
