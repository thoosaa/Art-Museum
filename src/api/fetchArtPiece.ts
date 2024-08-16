import { BASE_URL } from '@constants/api_routes';
import axios from 'axios';

interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
  is_public: boolean;
}

export const fetchArtPiece = async (art_id: string): Promise<ArtPieceInfo | undefined> => {
  try {
    const res = await axios.get(`${BASE_URL}/${art_id}`);
    const info = res.data.data;
    return {
      title: info.title,
      artist: info.artist_title,
      image_id: info.image_id,
      is_public: info.is_public_domain,
    };
  } catch (error) {
    console.error('Error fetching art piece:', error);
    return undefined;
  }
};
