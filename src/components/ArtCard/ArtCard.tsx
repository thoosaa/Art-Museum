import './ArtCard.scss';
//import image from '@assets/images/image 1.png';
import bookmark from '@assets/images/bookmark-orange.svg';
import bookmark_fill from '@assets/images/bookmark-orange-fill.svg';
import { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
  is_public: boolean;
}

type ArtCardProps = { art_id: string };

export default function ArtCard({ art_id }: ArtCardProps) {
  const [bookmarkImg, setBookmarkImg] = useState<string>(sessionStorage.getItem(art_id) ? bookmark_fill : bookmark);
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfo>({
    title: '',
    artist: '',
    image_id: '',
    is_public: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtPiece = async () => {
      try {
        const res = await axios.get(`https://api.artic.edu/api/v1/artworks/${art_id}`);
        console.log(res.data.data);
        setArtPieceInfo({
          title: res.data.data.title,
          artist: res.data.data.artist_title,
          image_id: res.data.data.image_id,
          is_public: res.data.data.is_public_domain,
        });
      } catch (error) {
        console.error('Error fetching art piece:', error);
      }
    };
    fetchArtPiece();
  }, [art_id]);

  const addRemoveArtPiece = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (sessionStorage.getItem(art_id)) {
      console.log('remove existing');
      sessionStorage.removeItem(art_id);
      setBookmarkImg(bookmark);
    } else {
      console.log('add new');
      sessionStorage.setItem(art_id, art_id);
      setBookmarkImg(bookmark_fill);
    }
  };

  return (
    <figure className="art-block" onClick={() => navigate(`/art/${art_id}`)}>
      <img
        className="art-block__image"
        alt="Picture"
        src={`https://www.artic.edu/iiif/2/${artPieceInfo.image_id}/full/843,/0/default.jpg`}
        width="305"
      />
      <figcaption className="art-block__description">
        <div className="art-block__info">
          <p className="art-block__title">{artPieceInfo.title}</p>
          <p className="art-block__author">{artPieceInfo.artist}</p>
          <p className="art-block__availability">{artPieceInfo.is_public ? 'Public' : 'Copywrite'}</p>
        </div>
        <button className="art-block__add-bookmark" onClick={addRemoveArtPiece}>
          <img src={bookmarkImg} alt="Bookmark" width="24" />
        </button>
      </figcaption>
    </figure>
  );
}
