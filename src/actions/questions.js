import * as types from '../constants';

export const navBarFilter = newData => {
  return {
    type: types.NAV_BAR_FILTER,
    payload: newData
  };
};
