import './ArtCard.scss';
import image from '@assets/images/image 1.png';
import bookmark from '@assets/images/bookmark-orange.svg';

export default function ArtCard() {
  return (
    <div className="gallery">
      <figure className="art-block">
        <img className="art-block__image" src={image} />
        <figcaption className="art-block__description">
          <div className="art-block__info">
            <p className="art-block__title">Charles V</p>
            <p className="art-block__author">Giovanni</p>
            <p className="art-block__availability">Public</p>
          </div>
          <button className="art-block__add-bookmark">
            <img src={bookmark} alt="Bookmark" width="24" />
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
