/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useRef} from 'react';

export function useCountDown(
  timeMilisecond: number | undefined,
  refetch?: boolean,
): number {
  const [counter, setCounter] = useState(timeMilisecond);
  const timerHandler = useRef<any>();

  // Timer UseEffect.
  useEffect(() => {
    if (timeMilisecond) {
      startTimer();
    }
    return clearCounter;
  }, [timeMilisecond, refetch]);

  const clearCounter = () => {
    if (timerHandler.current) {
      clearInterval(timerHandler.current);
    }
  };

  const startTimer: () => void = () => {
    setCounter(timeMilisecond);
    clearCounter();
    timerHandler.current = setInterval(() => {
      setCounter(count => {
        count = count! - 1000;
        if (count < 1000) {
          clearCounter();
          return 0;
        }
        return count;
      });
    }, 1000);
  };
  return counter as number;
}
