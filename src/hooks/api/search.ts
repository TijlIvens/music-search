import { useEffect, useState } from 'react';
import useDebounce from '../useDebounce';
import { Result } from './searchType';

const useItunesSearch = (searchTerm: string) => {
  const [results, setResults] = useState<Result[]>();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      setIsLoading(true);

      fetch(
        `${process.env.REACT_APP_ITUNES_BASE_URL}/search?${new URLSearchParams({
          term: debouncedSearchTerm,
        })}`,
      )
        .then((res) => {
          res.json().then((data) => {
            setResults(data.results);
            setIsLoading(false);
          });
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [debouncedSearchTerm]);

  return { results, isLoading };
};

export default useItunesSearch;
