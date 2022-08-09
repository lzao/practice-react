import axios from 'axios';
import { API_DOMAIN } from '../constants';
import {confirmedStatApi, confirmedStat} from 'interfaces/confirmedStat.interface';
import {useEffect, useState} from 'react';

function getClass(increaseCase: number): string {
  const result = 'gray';
  return increaseCase >= 1000 ? 'red' : increaseCase < 0 ? 'blue' : result;
}

function getArrow(increaseCase: number): string {
  return increaseCase > 0 ? '▲' : '▼';
}

export default function useConfirmedStat(): confirmedStat | undefined {
  const [stat, setStat] = useState<confirmedStat>();

  async function getStat() {
    await axios.get<confirmedStatApi>(API_DOMAIN + '/region/stat').then(response => {
      const data = response.data;
      setStat({
        confirmed: {
          case: data.confirmed[0].toLocaleString(),
          increaseCase: data.confirmed[1].toLocaleString(),
          class: getClass(data.confirmed[1]),
          arrow: getArrow(data.confirmed[1]),
        },
        deceased: {
          case: data.deceased[0].toLocaleString(),
          increaseCase: data.deceased[1].toLocaleString(),
          class: getClass(data.deceased[1]),
          arrow: getArrow(data.deceased[1]),
        },
        confirmedCritical: {
          case: data.confirmedCritical[0].toLocaleString(),
          increaseCase: data.confirmedCritical[1].toLocaleString(),
          class: getClass(data.confirmedCritical[1]),
          arrow: getArrow(data.confirmedCritical[1]),
        },
        hospitalised: {
          case: data.hospitalised[0].toLocaleString(),
          increaseCase: data.hospitalised[1].toLocaleString(),
          class: getClass(data.hospitalised[1]),
          arrow: getArrow(data.hospitalised[1]),
        },
      });
    });
  }
  useEffect(() => {
    getStat();
  }, []);

  return stat;
}