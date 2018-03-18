import axios from 'axios';
import * as types from '../constants';

//&inname=javascript

// search/advanced?page=1&pagesize=10&fromdate=&todate=&order=desc&sort=activity&q=&accepted=&closed=&site=stackoverflow&filter=!.FjwPGLxmyYTh_1x.CPOGnXs*)C_y&key=FWgOPj7j5DKXZG4DgyClig((

const getTags = () =>
  axios
    .get(
      `${types.BASE_URL}tags?order=desc&sort=popular&site=stackoverflow&filter=!9ewK8EadT${types.KEY}`
    )
    .then(response => response.data);

export default getTags;
