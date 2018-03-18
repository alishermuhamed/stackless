import * as types from '../constants';

const search = value => ({
  type: types.UPDATE_FILTER_PARAMS,
  payload: value
});

export default search;
