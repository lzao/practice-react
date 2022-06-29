import axios from 'axios';
import {liveApi, live} from 'interfaces/live.interfaces';
import {useEffect, useRef, useState} from 'react';

const liveInit = {
  today: '0',
  yesterday: {case: '0', class: ''},
  weekAgo: {case: '0', class: ''},
  twoWeeksAgo: {case: '0', class: ''},
  monthAgo: {case: '0', class: ''},
};
export default function useLive(): live {
  const isCalled = useRef(false);
  const [live, setLive] = useState<live>(liveInit);
  async function getLive() {
    await axios.get<liveApi>('/region/live').then(response => {
      if (!isCalled.current) {
        const data = response.data;
        const yesterday = data.yesterday - data.today;
        const weekAgo = data.weekAgo - data.today;
        const twoWeekAgo = data.twoWeeksAgo - data.today;
        const monthAgo = data.monthAgo - data.today;
        setLive({
          today: data.today.toLocaleString(),
          yesterday: {case: Math.abs(yesterday).toLocaleString(), class: yesterday < 0 ? 'red' : 'blue'},
          weekAgo: {case: Math.abs(weekAgo).toLocaleString(), class: weekAgo < 0 ? 'red' : 'blue'},
          twoWeeksAgo: {case: Math.abs(twoWeekAgo).toLocaleString(), class: twoWeekAgo < 0 ? 'red' : 'blue'},
          monthAgo: {case: Math.abs(monthAgo).toLocaleString(), class: monthAgo < 0 ? 'red' : 'blue'},
        });
      }
    });
  }

  useEffect(() => {
    getLive();
    return () => {
      isCalled.current = true;
    };
  }, []);

  return live;
}
