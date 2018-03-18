import { Map, List } from 'immutable';
import * as types from '../constants';

const initialState = Map({
  isFetching: false,
  items: List()
  //error: null
});

const tags = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_TAGS:
      return state.set('isFetching', true).delete('error');
    case types.RECEIVE_TAGS_ERROR:
      return Map({
        isFetching: false,
        error: payload
      });
    case types.RECEIVE_TAGS:
      return state.set('isFetching', false).merge(payload);
    default:
      return state;
  }
};

export default tags;
