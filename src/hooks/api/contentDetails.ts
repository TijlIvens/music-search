import { useEffect, useState } from 'react';
import { Result } from './searchType';

const useContentDetails = (id: string) => {
  const [result, setResults] = useState<Result>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);

      fetch(
        `${process.env.REACT_APP_ITUNES_BASE_URL}/lookup?${new URLSearchParams({
          id,
        })}`,
      )
        .then((res) => {
          res.json().then((data) => {
            setIsLoading(false);
            setResults(data.results?.shift());
          });
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  return { result, isLoading };
};

export default useContentDetails;
