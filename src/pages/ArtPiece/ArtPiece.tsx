import Header from '@components/Header/Header';
import './ArtPiece.scss';
import Footer from '@components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';
import bookmark from '@assets/images/bookmark-orange.svg';
import bookmark_fill from '@assets/images/bookmark-orange-fill.svg';
import getNationality from '@utils/helperFunctions/getNationality';

interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
  date_start: string;
  date_end: string;
  nationality: string;
  dimensions: string;
  credit_line: string;
  repository: string;
  is_public: boolean;
}

export default function ArtPiece() {
  const params = useParams();
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfo>({
    title: '',
    artist: '',
    image_id: '',
    date_start: '',
    date_end: '',
    nationality: '',
    dimensions: '',
    credit_line: '',
    repository: '',
    is_public: false,
  });
  const [bookmarkImg, setBookmarkImg] = useState<string>(
    sessionStorage.getItem(params.artId) ? bookmark_fill : bookmark,
  );

  useEffect(() => {
    const fetchArtPiece = async () => {
      try {
        const res = await axios.get(`https://api.artic.edu/api/v1/artworks/${params.artId}`);
        console.log(res.data.data);
        setArtPieceInfo({
          title: res.data.data.title,
          artist: res.data.data.artist_title || 'Unknown',
          image_id: res.data.data.image_id,
          date_start: res.data.data.date_start,
          date_end: res.data.data.date_end,
          nationality: getNationality(res.data.data.artist_display) || 'Unknown',
          dimensions: res.data.data.dimensions,
          credit_line: res.data.data.credit_line,
          repository: res.data.data.gallery_title || 'Unknown',
          is_public: res.data.data.is_public_domain,
        });
      } catch (error) {
        console.error('Error fetching art piece:', error);
      }
    };
    fetchArtPiece();
  }, [params.artId]);

  const addRemoveArtPiece = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (sessionStorage.getItem(params.artId)) {
      console.log('remove existing');
      sessionStorage.removeItem(params.artId);
      setBookmarkImg(bookmark);
    } else {
      console.log('add new');
      sessionStorage.setItem(params.artId, params.artId);
      setBookmarkImg(bookmark_fill);
    }
  };

  return (
    <>
      <Header id={2} />
      <main className="main art-piece">
        <div className="art-piece-image">
          <img alt="Picture" src={`https://www.artic.edu/iiif/2/${artPieceInfo.image_id}/full/843,/0/default.jpg`} />
          <button className="art-block__add-bookmark art-piece-bookmark" onClick={addRemoveArtPiece}>
            <img src={bookmarkImg} alt="Bookmark" width="24" />
          </button>
        </div>
        <div className="art-piece-info">
          <div className="art-piece-info__main">
            <p className="art-piece__title">{artPieceInfo.title}</p>
            <p className="art-piece-info__artist">{artPieceInfo.artist}</p>
            <p className="art-piece-info__period">
              {artPieceInfo.date_start === artPieceInfo.date_end
                ? artPieceInfo.date_end
                : `${artPieceInfo.date_start}-${artPieceInfo.date_end}`}
            </p>
          </div>
          <div className="art-piece-info__overview">
            <p className="art-piece__title">Overview</p>
            <p>
              <span className="yellow-highlight">Artist nationality: </span>
              {artPieceInfo.nationality}
            </p>
            <p>
              <span className="yellow-highlight">Dimensions: </span>
              {artPieceInfo.dimensions}
            </p>
            <p>
              <span className="yellow-highlight">Credit line: </span>
              {artPieceInfo.credit_line}
            </p>
            <p>
              <span className="yellow-highlight">Repository: </span>
              {artPieceInfo.repository}
            </p>
            <p>{artPieceInfo.is_public ? 'Public' : 'Copywrite'}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
