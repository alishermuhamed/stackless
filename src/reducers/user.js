import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as types from '../constants';

const isFetching = (state = false, { type }) => {
  switch (type) {
    case types.REQUEST_USER:
      return true;
    case types.RECEIVE_USER:
    case types.RECEIVE_USER_ERROR:
      return false;
    default:
      return state;
  }
};

const error = (state = '', { type, payload }) => {
  switch (type) {
    case types.RECEIVE_USER:
      return '';
    case types.RECEIVE_USER_ERROR:
      return payload;
    default:
      return state;
  }
};

const userInfo = (state = Map(), { type, payload }) => {
  switch (type) {
    case types.RECEIVE_USER:
      return payload.get('userInfo');
    default:
      return state;
  }
};

const questions = (state = Map(), { type, payload }) => {
  switch (type) {
    case types.RECEIVE_USER_ERROR:
      return Map();
    case types.RECEIVE_USER:
      return payload.get('questions');
    default:
      return state;
  }
};

export default combineReducers({ isFetching, error, userInfo, questions });
