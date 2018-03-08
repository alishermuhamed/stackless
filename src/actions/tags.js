import fetch from 'cross-fetch';
import * as types from '../constants';

function requestTags() {
  return {
    type: types.REQUEST_TAGS
  };
}

function receiveTags(json) {
  return {
    type: types.RECEIVE_TAGS,
    items: json.items.map(i => i.name)
  };
}

function fetchTags() {
  return dispatch => {
    dispatch(requestTags());
    return fetch(
      `${
        types.BASE_URL
      }tags?order=desc&sort=popular&site=stackoverflow&filter=!-.G.68gzI8DP`
    ) // api call
      .then(response => response.json())
      .then(json => dispatch(receiveTags(json)));
  };
}

export default fetchTags;
