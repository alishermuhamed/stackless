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

const sortParams = (
  state = Map({
    fromDate: '',
    toDate: '',
    order: 'desc',
    sort: 'activity',
    q: '',
    accepted: '',
    closed: ''
  }),
  { type, payload }
) => {
  switch (type) {
    case types.UPDATE_SEARCH_VALUE:
      return state.set('q', payload);
    case types.REQUEST_QUESTIONS:
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
  sortParams,
  users,
  questionsList
});
