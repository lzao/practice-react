import {useEffect, useState} from 'react';
import {getCorona} from '../api/corona';
import coronaApiProps from '../interfaces/coronaApiProps.interface';

export default function useDailyCorona(): void|coronaApiProps[] {
  const [items, setItems] = useState<coronaApiProps[]>();

  const coronaItems = getCorona();
  useEffect(() => {
    coronaItems.then(response => {
      setItems(response);
    });
  }, []);

  return items;
}
