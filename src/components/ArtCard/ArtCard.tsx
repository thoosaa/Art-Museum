import './ArtCard.scss';
//import image from '@assets/images/image 1.png';
import bookmark from '@assets/images/bookmark-orange.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
}

type ArtCardProps = { art_id: string };

export default function ArtCard({ art_id }: ArtCardProps) {
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

  return (
    <figure className="art-block">
      <img
        className="art-block__image"
        src={`https://www.artic.edu/iiif/2/${artPieceInfo.image_id}/full/843,/0/default.jpg`}
        width="305"
      />
      <figcaption className="art-block__description">
        <div className="art-block__info">
          <p className="art-block__title">{artPieceInfo.title}</p>
          <p className="art-block__author">{artPieceInfo.artist}</p>
          <p className="art-block__availability">Public</p>
        </div>
        <button className="art-block__add-bookmark">
          <img src={bookmark} alt="Bookmark" width="24" />
        </button>
      </figcaption>
    </figure>
  );
}
