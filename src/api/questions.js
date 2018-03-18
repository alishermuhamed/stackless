import axios from 'axios';
import * as types from '../constants';

const getQuestions = params => {
  return axios
    .get(
      `${types.BASE_URL}search/advanced?page=1&pagesize=70` +
        `&answers=${params.get('answers')}` +
        `&q=${params.get('q')}` +
        `&accepted=${params.get('accepted')}` +
        `&closed=${params.get('closed')}&site=stackoverflow` +
        `&filter=!7gohVV6XgKayq9xDpDWIwS1BxPpYBHPGK*${types.KEY}`
    )
    .then(response => response.data);
};

export default getQuestions;
