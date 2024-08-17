import './MainGallery.scss';

import ArtCard from '@components/ArtCard/ArtCard';
import { MainGalleryProps } from 'types/types';

export default function MainGallery({ art_ids }: MainGalleryProps) {
  return (
    <div className="gallery">
      {art_ids.map((id) => (
        <ArtCard art_id={id} key={id} />
      ))}
    </div>
  );
}
