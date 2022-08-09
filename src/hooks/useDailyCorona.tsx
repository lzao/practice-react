import {useEffect, useState, useRef} from 'react';
import coronaApiProps from '../interfaces/coronaApiProps.interface';
import axios from "axios";
import { API_DOMAIN } from '../constants';

export default function useDailyCorona(): coronaApiProps[] | undefined {
  const isCancelled = useRef(false);
  const [items, setItems] = useState<coronaApiProps[]>();

  async function setCorona() {
    await axios
      .get<coronaApiProps[]>(API_DOMAIN + '/region/province')
      .then(response => {
        if (!isCancelled.current) {
          setItems((response.data));
        }
      });
  }

  useEffect(() => {
    setCorona();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return items;
}