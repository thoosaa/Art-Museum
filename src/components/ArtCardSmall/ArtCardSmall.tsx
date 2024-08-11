import { useEffect, useState, MouseEvent } from 'react';
import './ArtCardSmall.scss';
import bookmark from '@assets/images/bookmark-orange.svg';
import bookmark_fill from '@assets/images/bookmark-orange-fill.svg';
import axios from 'axios';

interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
}

type ArtCardPropsSmall = { art_id: string };

export default function ArtCardSmall({ art_id }: ArtCardPropsSmall) {
  const [bookmarkImg, setBookmarkImg] = useState<string>(sessionStorage.getItem(art_id) ? bookmark_fill : bookmark);
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfo>({
    title: '',
    artist: '',
    image_id: '',
  });

  useEffect(() => {
    const fetchArtPiece = async () => {
      try {
        const res = await axios.get(`https://api.artic.edu/api/v1/artworks/${art_id}`);
        console.log(res.data.data);
        setArtPieceInfo({
          title: res.data.data.title,
          artist: res.data.data.artist_title,
          image_id: res.data.data.image_id,
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
    <figure className="small-art-block">
      <img
        className="small-art-block__image"
        alt="Picture"
        src={`https://www.artic.edu/iiif/2/${artPieceInfo.image_id}/full/843,/0/default.jpg`}
        width="80"
        height="80"
      />
      <figcaption>
        <div className="small-art-block__info">
          <p className="art-block__title">{artPieceInfo.title}</p>
          <p className="art-block__author">{artPieceInfo.artist}</p>
          <p className="art-block__availability">Public</p>
        </div>
      </figcaption>
      <button className="art-block__add-bookmark" onClick={addRemoveArtPiece}>
        <img src={bookmarkImg} alt="Bookmark" width="24" />
      </button>
    </figure>
  );
}
