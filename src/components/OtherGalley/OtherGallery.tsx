import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall';
import './OtherGallery.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OtherGallery() {
  const [art, setArt] = useState<string[]>([]);

  useEffect(() => {
    fetchArt();
  }, []);

  const fetchArt = async () => {
    try {
      const res = await axios.get(`https://api.artic.edu/api/v1/artworks?limit=9`);
      console.log(res.data.data.map((item) => item.id));
      setArt(res.data.data.map((item) => item.id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <h3 className="section__subtitle">Here some more</h3>
      <h2 className="section__title">Other works for you</h2>
      <div className="other-gallery">
        {art.map((id) => (
          <ArtCardSmall art_id={id} key={id} />
        ))}
      </div>
    </section>
  );
}
