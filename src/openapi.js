/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line @typescript-eslint/no-var-requires

import axios from 'axios';

export async function getCorona() {
  const params = {
    ServiceKey:
      'So63R7Gz1oUcEF2kQgk/GqMJA7J/3GZLfmeK7UZRgarXKvOksGDtTYEFBWIyWrzTj5MpeWYn6pG9mjy8DTh84w==',
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: 20211022,
    endCreateDt: 20211022,
  };

  await axios
    .get('/openapi/service/rest/Covid19/getCovid19SidoInfStateJson', {
      params,
    })
    .then(response => {
      const aa = JSON.stringify(response.data);
      const bb = JSON.parse(aa);
      console.log(bb.response.body.items.item[1]);
    });
}
