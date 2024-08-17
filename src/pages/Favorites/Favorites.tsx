import './Favorites.scss';

import { images } from '@assets/images/images';
import FavoritesGallery from '@components/FavoritesGallery/FavoritesGallery';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

export default function Favorites() {
  return (
    <>
      <Header amountOfLinks={2} />
      <main className="main">
        <h1 className="page-title">
          Here Are Your{' '}
          <span className="favorites-title-highlight">
            <img src={images.bookmark} alt="Bookmark" height="55" />
            Favorites
          </span>
        </h1>

        <section className="section-favorites">
          <h3 className="section__subtitle">Saved by you</h3>
          <h2 className="section__title">Your favorites list</h2>
          <FavoritesGallery />
        </section>
      </main>
      <Footer />
    </>
  );
}
