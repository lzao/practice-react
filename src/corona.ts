import axios from 'axios';
import moment from 'moment';
import {DAILY_CORONA_STATUS_API_SERVICE_KEY} from './constants';

export async function getCorona() {
  const nowDate: string = getNowDate();

  const params = {
    ServiceKey: DAILY_CORONA_STATUS_API_SERVICE_KEY,
    pageNo: 1,
    numOfRows: 20,
    startCreateDt: nowDate,
    endCreateDt: nowDate,
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

function getNowDate(): string {
  return moment().format('YYYYMMDD');
}
