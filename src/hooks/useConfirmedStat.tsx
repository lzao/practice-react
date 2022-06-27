import axios from 'axios';
import confirmedStat from 'interfaces/confirmedStat.interface';
import {useEffect, useState} from 'react';

export default function useConfirmedStat(): confirmedStat | undefined {
  const [stat, setStat] = useState<confirmedStat>();

  async function getStat() {
    await axios.get<confirmedStat>('/region/stat').then(response => {
      setStat(response.data);
    });
  }
  useEffect(() => {
    getStat();
  }, []);

  return stat;
}
