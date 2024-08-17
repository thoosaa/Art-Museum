import { BASE_URL, SEARCH_ENDPOINT } from '@constants/api_routes';
import { usePagination } from '@context/PageContext/PageContext';
import getErrorMessage from '@utils/helperFunctions/getErrorMessage';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useDebounce } from './useDebounce';

export function useSearch() {
  const { currentPage, query, isSorted } = usePagination();
  const debouncedValue = useDebounce(query, 500);
  const [art, setArt] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchArt = async (query: string) => {
      try {
        setIsLoading(true);
        console.log(query);
        const res = await axios.get(`${BASE_URL}${SEARCH_ENDPOINT}`, {
          params: {
            q: query,
            size: 5,
            from: (currentPage - 1) * 5,
            sort: isSorted ? 'title.keyword' : '',
          },
        });

        setTotal(res.data.pagination.total);
        setArt(res.data.data.map((item: { id: number }) => item.id));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(getErrorMessage(error));
      }
    };
    console.log(query);
    fetchArt(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isSorted, debouncedValue]);

  return { isLoading, error, art, total };
}
