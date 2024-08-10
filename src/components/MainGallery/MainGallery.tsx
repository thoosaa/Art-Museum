import ArtCard from '@components/ArtCard/ArtCard';
import './MainGallery.scss';

type MainGalleryProps = { art_ids: string[] };

export default function MainGallery({ art_ids }: MainGalleryProps) {
  return (
    <section>
      <h3 className="section__subtitle">Topics for you</h3>
      <h2 className="section__title">Our special gallery</h2>
      <div className="gallery">
        {art_ids.map((id) => (
          <ArtCard art_id={id} key={id} />
        ))}
      </div>
    </section>
  );
}
