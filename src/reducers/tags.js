import { List } from 'immutable';
import * as types from '../constants';

const tags = (state = List(), { type, payload }) => {
  switch (type) {
    case types.REQUEST_TAGS:
      return List();
    case types.RECEIVE_TAGS:
      return List(payload);
    case types.RECEIVE_TAGS_ERROR:
      return payload;
    default:
      return state;
  }
};

export default tags;
