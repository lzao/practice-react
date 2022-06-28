import axios from 'axios';
import live from 'interfaces/live.interfaces';
import {useEffect, useState} from 'react';

const liveInit = {
  today: 0,
  yesterday: 0,
  weekAgo: 0,
  twoWeeksAgo: 0,
  monthAgo: 0,
};
export default function useLive(): live {
  const [live, setLive] = useState<live>(liveInit);
  async function getLive() {
    await axios.get<live>('/region/live').then(response => {
      setLive(response.data);
    });
  }

  useEffect(() => {
    getLive();
  }, []);

  return live;
}
