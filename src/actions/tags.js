import { List } from 'immutable';
import getTags from '../api/tags';
import * as types from '../constants';

const fetchTags = () => {
  return dispatch => {
    dispatch({ type: types.REQUEST_TAGS });

    getTags()
      .then(result => {
        return dispatch({
          type: types.RECEIVE_TAGS,
          payload: List(result.items.map(obj => obj.name))
        });
      })
      .catch(err => {
        dispatch({
          type: types.RECEIVE_TAGS_ERROR,
          payload: err
        });
      });
  };
};

export default fetchTags;
