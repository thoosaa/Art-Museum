import { useEffect, useState } from 'react';
import axios from 'axios';
import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall';
import './OtherGallery.scss';

import Loader from '@components/Loader/Loader';

export default function OtherGallery() {
  const [art, setArt] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchArt();
  }, []);

  const fetchArt = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://api.artic.edu/api/v1/artworks?limit=9`);
      console.log(res.data.data.map((item: { id: number }) => item.id));
      setArt(res.data.data.map((item: { id: number }) => item.id));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="other-gallery">
      {isLoading ? <Loader /> : art.map((id) => <ArtCardSmall art_id={id} key={id} />)}
    </div>
  );
}
