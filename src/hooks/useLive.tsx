import axios from 'axios';
import {liveApi, live} from 'interfaces/live.interfaces';
import {useEffect, useState} from 'react';

function getClass(count: number): string {
  return count < 0 ? 'red' : 'blue';
}

function getCase(count: number): string {
  return Math.abs(count).toLocaleString();
}

export default function useLive(): live | undefined {
  const [live, setLive] = useState<live>();
  async function getLive() {
    await axios.get<liveApi>('/region/live').then(response => {
      const data = response.data;
      const yesterday = data.yesterday - data.today;
      const weekAgo = data.weekAgo - data.today;
      const twoWeekAgo = data.twoWeeksAgo - data.today;
      const monthAgo = data.monthAgo - data.today;
      setLive({
        today: data.today.toLocaleString(),
        yesterday: {case: getCase(yesterday), class: getClass(yesterday)},
        weekAgo: {case: getCase(weekAgo), class: getClass(weekAgo)},
        twoWeeksAgo: {case: getCase(twoWeekAgo), class: getClass(twoWeekAgo)},
        monthAgo: {case: getCase(monthAgo), class: getClass(monthAgo)},
      });
    });
  }

  useEffect(() => {
    getLive();
  }, []);

  return live;
}
