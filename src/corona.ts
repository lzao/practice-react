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

  const result = await axios
    .get('/openapi/service/rest/Covid19/getCovid19SidoInfStateJson', {
      params,
    })
    .then(response => {
      return JSON.parse(JSON.stringify(response.data)).response.body.items.item;
    });

  return result;
}
