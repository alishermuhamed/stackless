import { Map, List } from 'immutable';
import * as types from '../constants';

const initialState = Map({
  isFetching: false,
  page: 1,
  pageSize: 10,
  fromDate: '',
  toDate: '',
  order: 'desc',
  sort: 'activity',
  q: '',
  accepted: '',
  closed: '',
  items: List()
});

const questions = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_QUESTIONS:
      return state.set('isFetching', true).merge(payload);
    case types.REQUEST_QUESTIONS_ERROR:
      return Map({
        isFetching: false,
        error: payload
      });
    case types.RECEIVE_QUESTIONS:
      return state.set('isFetching', false).set('items', payload);
    default:
      return state;
  }
};

export default questions;
