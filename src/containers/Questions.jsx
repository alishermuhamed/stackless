import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import fetchQuestions from '../actions/questions';
import { Filter } from './';
import { QuestionsList } from '../components';
import {
  getErrorMessage,
  getIsFetching,
  getFilterParams,
  getQuestionsList,
  getUsers
} from '../selectors/questions';

class Questions extends React.Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    filterParams: PropTypes.instanceOf(Map).isRequired,
    questions: PropTypes.instanceOf(Map).isRequired,
    users: PropTypes.instanceOf(Map)
  };

  static defaultProps = {
    error: undefined,
    users: Map()
  };

  componentDidMount() {
    const { fetchQuestions, filterParams } = this.props;
    fetchQuestions(filterParams);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchQuestions, filterParams } = this.props;
    nextProps.filterParams !== filterParams &&
      fetchQuestions(nextProps.filterParams);
  }

  render() {
    const { questions, users, error, isFetching } = this.props;

    return (
      <div>
        <Filter />
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
  filterParams: getFilterParams(state),
  questions: getQuestionsList(state),
  users: getUsers(state)
});

export default connect(mapStateToProps, { fetchQuestions })(Questions);
