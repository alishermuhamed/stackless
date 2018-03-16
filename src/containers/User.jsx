import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import { User as UserComponent, QuestionsList } from '../components';
import fetchUser from '../actions/user';
import {
  allTimeAnswers,
  allTimeScore,
  getErrorMessage,
  getInfo,
  getIsFetching,
  getQuestions
} from '../selectors/user';

class User extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }).isRequired,
    fetchUser: PropTypes.func.isRequired,
    userInfo: PropTypes.instanceOf(Map),
    questions: PropTypes.instanceOf(List),
    allTimeScore: PropTypes.number,
    allTimeAnswers: PropTypes.number,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    userInfo: Map(),
    questions: List(),
    allTimeScore: undefined,
    allTimeAnswers: undefined,
    error: ''
  };

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.id);
  }

  render() {
    const {
      userInfo,
      questions,
      error,
      isFetching,
      allTimeScore,
      allTimeAnswers
    } = this.props;
    return (
      <React.Fragment>
        <UserComponent info={userInfo} />
        <QuestionsList
          questions={questions}
          allTimeScore={allTimeScore}
          allTimeAnswers={allTimeAnswers}
          errorMessage={error}
          isFetching={isFetching}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: getInfo(state),
  questions: getQuestions(state),
  error: getErrorMessage(state),
  isFetching: getIsFetching(state),
  allTimeScore: allTimeScore(state),
  allTimeAnswers: allTimeAnswers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (...params) => dispatch(fetchUser(...params))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
