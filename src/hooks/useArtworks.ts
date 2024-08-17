import { BASE_URL } from '@constants/api_routes';
import getErrorMessage from '@utils/helperFunctions/getErrorMessage';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useArtworks() {
  const [art, setArt] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const numberOfArtworks = 9;

  useEffect(() => {
    const fetchArt = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}?limit=${numberOfArtworks}`);
        //console.log(res.data.data.map((item: { id: number }) => item.id));
        setArt(res.data.data.map((item: { id: number }) => item.id));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(getErrorMessage(error));
      }
    };
    fetchArt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { art, isLoading, error };
}
