import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as types from '../constants';

const isFetching = (state = false, { type }) => {
  switch (type) {
    case types.REQUEST_QUESTIONS:
      return true;
    case types.RECEIVE_QUESTIONS:
    case types.RECEIVE_QUESTIONS_ERROR:
      return false;
    default:
      return state;
  }
};

const error = (state = '', { type, payload }) => {
  switch (type) {
    case types.RECEIVE_QUESTIONS:
      return '';
    case types.RECEIVE_QUESTIONS_ERROR:
      return payload;
    default:
      return state;
  }
};

const filterParams = (
  state = Map({
    answers: '',
    tagged: '',
    q: '',
    accepted: '',
    closed: ''
  }),
  { type, payload }
) => {
  switch (type) {
    case types.UPDATE_FILTER_PARAMS:
      return state.merge(payload);
    default:
      return state;
  }
};

const users = (state = Map(), { type, payload }) => {
  switch (type) {
    case types.RECEIVE_QUESTIONS:
      return payload.get('users');
    case types.RECEIVE_QUESTIONS_ERROR:
      return Map();
    default:
      return state;
  }
};

const questionsList = (state = Map(), { type, payload }) => {
  switch (type) {
    case types.RECEIVE_QUESTIONS:
      return payload.get('questionsList');
    case types.RECEIVE_QUESTIONS_ERROR:
      return Map();
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  error,
  filterParams,
  users,
  questionsList
});
