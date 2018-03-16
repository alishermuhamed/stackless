import axios from 'axios';
import * as types from '../constants';

const getQuestions = params => {
  return axios
    .get(
      `${types.BASE_URL}search/advanced?page=${params.get('page')}` +
        `&pagesize=${params.get('pageSize')}` +
        `&fromdate=${params.get('fromDate')}` +
        `&todate=${params.get('toDate')}&order=${params.get('order')}` +
        `&sort=${params.get('sort')}&q=${params.get('q')}` +
        `&accepted=${params.get('accepted')}` +
        `&closed=${params.get('closed')}&site=stackoverflow` +
        `&filter=!.FjwPGLxmyYTh_1x.CPOGnXs*)C_y${types.KEY}`
    )
    .then(response => response.data);
};

export default getQuestions;
