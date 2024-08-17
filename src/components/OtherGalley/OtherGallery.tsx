import './OtherGallery.scss';

import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall';
import Loader from '@components/Loader/Loader';
import { useArtworks } from '@hooks/useArtworks';

export default function OtherGallery() {
  const { art, isLoading, error } = useArtworks();

  return (
    <div className="other-gallery">
      {error ? <h1>{error}</h1> : isLoading ? <Loader /> : art.map((id) => <ArtCardSmall art_id={id} key={id} />)}
    </div>
  );
}
