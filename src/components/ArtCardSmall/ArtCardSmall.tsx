import './ArtCardSmall.scss';

import { images } from '@assets/images/images';
import Loader from '@components/Loader/Loader';
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes';
import { useArtCard } from '@hooks/useArtCard';
import { useBookmark } from '@hooks/useBookmark';
import { useNavigate } from 'react-router-dom';
import { ArtCardPropsSmall } from 'types/types';

export default function ArtCardSmall({ art_id }: ArtCardPropsSmall) {
  const { bookmarkImg, addRemoveArtPiece } = useBookmark(art_id);
  const { artPieceInfo, isLoading, error } = useArtCard(art_id);
  const navigate = useNavigate();

  return error ? (
    <h1 className="page-title">{error}</h1>
  ) : isLoading ? (
    <Loader />
  ) : (
    <figure className="small-art-block" onClick={() => navigate(`/art/${art_id}`)}>
      <img
        className="small-art-block__image"
        alt="Picture"
        src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width="80"
        height="80"
      />
      <figcaption>
        <div className="small-art-block__info">
          <p className="art-block__title">{artPieceInfo?.title}</p>
          <p className="art-block__author">{artPieceInfo?.artist}</p>
          <p className="art-block__availability">{artPieceInfo?.is_public ? 'Public' : 'Copywrite'}</p>
        </div>
      </figcaption>
      <button className="art-block__add-bookmark" onClick={addRemoveArtPiece}>
        <img src={bookmarkImg} alt="Bookmark" width="24" />
      </button>
    </figure>
  );
}
