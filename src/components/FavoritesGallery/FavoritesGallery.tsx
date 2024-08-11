import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall';
import './FavoritesGallery.scss';

export default function FavoritesGallery() {
  return (
    <div className="other-gallery">
      {Object.keys(sessionStorage).map((id) => (
        <ArtCardSmall art_id={id} key={id} />
      ))}
    </div>
  );
}
