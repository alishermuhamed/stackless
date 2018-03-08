import axios from 'axios';
import { BASE_URL } from '../constants';

const complexSearch = ({
  pagesize = 10,
  order = 'desc',
  sort = 'activity',
  q = ''
}) => {
  return axios.get(
    `${BASE_URL}search/advanced?pagesize=${pagesize}&order=${order}` +
      `&sort=${sort}&q=${q}&site=stackoverflow`
  );
};

export default complexSearch;
