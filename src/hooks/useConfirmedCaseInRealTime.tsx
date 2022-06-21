import axios from "axios";
import realTimeConfirmedCase from "interfaces/realTimeConfirmedCase.interface";
import { useEffect, useRef, useState } from "react";

export default function useConfirmedCaseInRealTime(): realTimeConfirmedCase[] {
  const isCalled = useRef(false);
  const [items, setItems] = useState<realTimeConfirmedCase[]>([]);

  async function getRealTimeConfirmedCaseList() {
    await axios.get<realTimeConfirmedCase[]>('/region/real').then(response => {
      if (!isCalled.current) {
        setItems(response.data)
      }
    });
  }

  useEffect(() => {
    getRealTimeConfirmedCaseList();
    return () => {
      isCalled.current = true;
    }
  }, []);

  return items;
}