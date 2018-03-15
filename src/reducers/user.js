import { fromJS } from 'immutable';
import * as types from '../constants';


const user = (state, { type, payload }) => {
  switch (type) {
    case types.REQUEST_USER:  
      return state.set('isFetching', true);
    case types.REQUEST_USER_FAILED:
      return fromJS({
        isFetching: false,
        error: payload
      });
    case types.RECEIVE_USER:
      return state.set('isFetching', false).set('json', payload);
    default:
      return state;
  }
};
