import axios from 'axios';
import * as types from '../constants';

const getTags = () => {
  return axios
    .get(
      `${types.BASE_URL}tags?order=desc&sort=popular&pagesize=50` +
        `&site=stackoverflow&filter=!-.G.68gzI8DP${types.KEY}`
    )
    .then(response => response.data);
};

export default getTags;
