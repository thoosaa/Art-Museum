import ArtCard from '@components/ArtCard/ArtCard';
import './MainGallery.scss';

export default function MainGallery() {
  return (
    <section>
      <h3 className="section__subtitle">Topics for you</h3>
      <h2 className="section__title">Our special gallery</h2>
      <ArtCard />
    </section>
  );
}
