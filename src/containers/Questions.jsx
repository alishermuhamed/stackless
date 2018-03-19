import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { fetchQuestions, updateFilterParams } from '../actions/questions';
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
    search: PropTypes.string,
    tag: PropTypes.string,
    fetchQuestions: PropTypes.func.isRequired,
    updateFilterParams: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    filterParams: PropTypes.instanceOf(Map).isRequired,
    questions: PropTypes.instanceOf(Map).isRequired,
    users: PropTypes.instanceOf(Map)
  };

  static defaultProps = {
    search: '',
    tag: '',
    error: undefined,
    users: Map()
  };

  componentDidMount() {
    const {
      updateFilterParams,
      filterParams,
      fetchQuestions,
      search,
      tag
    } = this.props;

    const params = {};
    search && (params.q = search);
    tag && (params.tagged = tag);

    if (Object.keys(params).length > 0) {
      updateFilterParams(Map(params));
    } else if (
      filterParams.get('q') !== '' ||
      filterParams.get('tagged') !== ''
    ) {
      updateFilterParams(Map({ q: '', tagged: '' }));
    } else {
      fetchQuestions();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      fetchQuestions,
      updateFilterParams,
      filterParams,
      search,
      tag
    } = this.props;
    if (nextProps.filterParams !== filterParams) {
      fetchQuestions();
    } else if (nextProps.search !== search || nextProps.tag !== tag) {
      updateFilterParams(Map({ q: nextProps.search, tagged: nextProps.tag }));
    }
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

const mapStateToProps = (state, ownProps) => ({
  search: ownProps.match.params.search,
  tag: ownProps.match.params.tag,
  isFetching: getIsFetching(state),
  error: getErrorMessage(state),
  filterParams: getFilterParams(state),
  questions: getQuestionsList(state),
  users: getUsers(state)
});

export default withRouter(
  connect(mapStateToProps, {
    fetchQuestions,
    updateFilterParams
  })(Questions)
);
