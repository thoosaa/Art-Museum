import { BASE_URL } from '@constants/api_routes';
import axios from 'axios';

export const fetchArtPiece = async (art_id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/${art_id}`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching art piece:', error);
    return undefined;
  }
};
