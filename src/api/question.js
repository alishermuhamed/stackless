import axios from 'axios';
import * as types from '../constants';

const getQuestion = questionId =>
  axios
    .get(
      `${types.BASE_URL}questions/${questionId}?order=desc&sort=activity&` +
        `site=stackoverflow&filter=!-lBwSMnedIpLk8ZyeX8Bj5(Pnwri1)` +
        `nmwFrnCOvfxTcVEgZ.Oc-tqP${types.KEY}`
    )
    .then(response => response.data);

export default getQuestion;
