import { Map, List } from 'immutable';
import * as types from '../constants';

const initialState = Map({
  isFetching: false,
  userInfo: Map(),
  questions: List()
});

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_USER:
      return state.set('isFetching', true);
    case types.RECEIVE_USER_ERROR:
      return Map({
        isFetching: false,
        error: payload
      });
    case types.RECEIVE_USER:
      return state.set('isFetching', false).merge(payload);
    default:
      return state;
  }
};

export default user;
