import { useState, useEffect, useCallback } from "react";

type CallbackFunction = (...args: any[]) => void;

const useDebounce = (callback: CallbackFunction, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: any) => {
      // ...args are the parameters passed by the debounced function it has nothing to do with the callback function of useCallback hook
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
      setTimeoutId(newTimeoutId);
    },
    [callback, delay, timeoutId]
  );

  return debouncedFunction;
};

export default useDebounce;
