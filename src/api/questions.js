import axios from 'axios';
import * as types from '../constants';

const getQuestions = ({
  page = 1,
  pageSize = 10,
  fromDate = '',
  toDate = '',
  order = 'desc',
  sort = 'activity',
  q = '',
  accepted = '',
  closed = ''
}) => {
  return axios
    .get(
      `${types.BASE_URL}search/advanced?page=${page}` +
        `&pagesize=${pageSize}&fromdate=${fromDate}&todate=${toDate}` +
        `&order=${order}&sort=${sort}&q=${q}&accepted=${accepted}` +
        `&closed=${closed}&site=stackoverflow` +
        `&filter=!.FjwPGLxmyYTh_1x.CPOGnXs*)C_y${types.KEY}`
    )
    .then(response => response.data);
};

export default getQuestions;
