import getTags from '../api/tags';
import * as types from '../constants';

/* const FAKE_DATA = {
  "items": [
    {
      "is_required": false,
      "count": 1580498,
      "name": "javascript"
    },
    {
      "is_required": false,
      "count": 1388435,
      "name": "java"
    },
    {
      "is_required": false,
      "count": 1190572,
      "name": "c#"
    },
    {
      "is_required": false,
      "count": 1178874,
      "name": "php"
    },
    {
      "is_required": false,
      "count": 1084074,
      "name": "android"
    },
    {
      "is_required": false,
      "count": 918308,
      "name": "python"
    },
    {
      "is_required": false,
      "count": 901977,
      "name": "jquery"
    },
    {
      "is_required": false,
      "count": 734849,
      "name": "html"
    },
    {
      "is_required": false,
      "count": 560959,
      "name": "c++"
    },
    {
      "is_required": false,
      "count": 555215,
      "name": "ios"
    },
    {
      "is_required": false,
      "count": 525829,
      "name": "css"
    },
    {
      "is_required": false,
      "count": 510278,
      "name": "mysql"
    },
    {
      "is_required": false,
      "count": 431397,
      "name": "sql"
    },
    {
      "is_required": false,
      "count": 330966,
      "name": "asp.net"
    },
    {
      "is_required": false,
      "count": 289258,
      "name": "ruby-on-rails"
    },
    {
      "is_required": false,
      "count": 283119,
      "name": "objective-c"
    },
    {
      "is_required": false,
      "count": 273464,
      "name": "c"
    },
    {
      "is_required": false,
      "count": 265649,
      "name": ".net"
    },
    {
      "is_required": false,
      "count": 258226,
      "name": "arrays"
    },
    {
      "is_required": false,
      "count": 250252,
      "name": "angularjs"
    },
    {
      "is_required": false,
      "count": 229006,
      "name": "json"
    },
    {
      "is_required": false,
      "count": 228846,
      "name": "r"
    },
    {
      "is_required": false,
      "count": 227447,
      "name": "sql-server"
    },
    {
      "is_required": false,
      "count": 218817,
      "name": "iphone"
    },
    {
      "is_required": false,
      "count": 217455,
      "name": "node.js"
    },
    {
      "is_required": false,
      "count": 193109,
      "name": "ruby"
    },
    {
      "is_required": false,
      "count": 185628,
      "name": "swift"
    },
    {
      "is_required": false,
      "count": 185017,
      "name": "regex"
    },
    {
      "is_required": false,
      "count": 184471,
      "name": "ajax"
    },
    {
      "is_required": false,
      "count": 170541,
      "name": "xml"
    }
  ],
  "has_more": true,
  "quota_max": 10000,
  "quota_remaining": 7661
}
*/

function requestTags() {
  return {
    type: types.REQUEST_TAGS
  };
}

function receiveTags(data) {
  return {
    type: types.RECEIVE_TAGS,
    payload: {
      items: data.items
    }
  };
}

function receiveTagsError(error) {
  return {
    type: types.RECEIVE_TAGS_ERROR,
    error
  };
}

export default function fetchTags() {
  return dispatch => {
    dispatch(requestTags());
    return getTags().then(
      response => dispatch(receiveTags(response)),
      err => dispatch(receiveTagsError(err.response.data))
    );
    //dispatch(receiveTags(FAKE_DATA));
  };
}
