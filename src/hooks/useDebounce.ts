const { useState, useEffect } = require('react');

const useDebounce = (value: any, milliseconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, milliseconds);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, milliseconds]);

  return debouncedValue;
};

export default useDebounce;
