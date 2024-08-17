import './ArtCard.scss';

import { images } from '@assets/images/images';
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes';
import { useArtCard } from '@hooks/useArtCard';
import { useBookmark } from '@hooks/useBookmark';
import { useNavigate } from 'react-router-dom';
import { ArtCardProps } from 'types/types';

export default function ArtCard({ art_id }: ArtCardProps) {
  const { bookmarkImg, addRemoveArtPiece } = useBookmark(art_id);
  const { artPieceInfo, isLoading, error } = useArtCard(art_id);
  const navigate = useNavigate();

  return error ? (
    <p>{error}</p>
  ) : isLoading ? (
    <img src={images.loader_image} loading="lazy" />
  ) : (
    <figure className="art-block" onClick={() => navigate(`/art/${art_id}`)}>
      <img
        className="art-block__image"
        alt="Picture"
        src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width="305"
        loading="lazy"
      />
      <figcaption className="art-block__description">
        <div className="art-block__info">
          <p className="art-block__title">{artPieceInfo?.title}</p>
          <p className="art-block__author">{artPieceInfo?.artist}</p>
          <p className="art-block__availability">{artPieceInfo?.is_public ? 'Public' : 'Copyright'}</p>
        </div>
        <button className="art-block__add-bookmark" onClick={addRemoveArtPiece}>
          <img src={bookmarkImg} alt="Bookmark" width="24" />
        </button>
      </figcaption>
    </figure>
  );
}
