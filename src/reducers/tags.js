import * as types from '../constants';

const tags = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_TAGS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_TAGS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
};

export default tags;
