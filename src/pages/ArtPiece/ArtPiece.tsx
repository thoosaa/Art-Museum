import './ArtPiece.scss';

import { images } from '@assets/images/images';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Loader from '@components/Loader/Loader';
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes';
import { useArtPiece } from '@hooks/useArtPiece';
import { useBookmark } from '@hooks/useBookmark';
import { useParams } from 'react-router-dom';

export default function ArtPiece() {
  const params = useParams<{ artId?: string }>();
  const { bookmarkImg, addRemoveArtPiece } = useBookmark(params.artId ?? '');
  const { artPieceInfo, isLoading, error } = useArtPiece(params.artId ?? '');

  return (
    <>
      <Header amountOfLinks={2} />
      {error ? (
        <h1 className="page-title">{error}</h1>
      ) : isLoading ? (
        <Loader />
      ) : (
        <main className="main art-piece">
          <div className="art-piece-image">
            <img
              alt="Picture"
              src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
              onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
            />
            <button className="art-block__add-bookmark art-piece-bookmark" onClick={addRemoveArtPiece}>
              <img src={bookmarkImg} alt="Bookmark" width="24" />
            </button>
          </div>
          <div className="art-piece-info">
            <div className="art-piece-info__main">
              <p className="art-piece__title">{artPieceInfo?.title}</p>
              <p className="art-piece-info__artist">{artPieceInfo?.artist}</p>
              <p className="art-piece-info__period">
                {artPieceInfo?.date_start === artPieceInfo?.date_end
                  ? artPieceInfo?.date_end
                  : `${artPieceInfo?.date_start}-${artPieceInfo?.date_end}`}
              </p>
            </div>
            <div className="art-piece-info__overview">
              <p className="art-piece__title">Overview</p>
              <p>
                <span className="yellow-highlight">Artist nationality: </span>
                {artPieceInfo?.nationality}
              </p>
              <p>
                <span className="yellow-highlight">Dimensions: </span>
                {artPieceInfo?.dimensions}
              </p>
              <p>
                <span className="yellow-highlight">Credit line: </span>
                {artPieceInfo?.credit_line}
              </p>
              <p>
                <span className="yellow-highlight">Repository: </span>
                {artPieceInfo?.repository}
              </p>
              <p>{artPieceInfo?.is_public ? 'Public' : 'Copywrite'}</p>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}
