import './Home.scss';

import { images } from '@assets/images/images';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Loader from '@components/Loader/Loader';
import MainGallery from '@components/MainGallery/MainGallery';
import OtherGallery from '@components/OtherGalley/OtherGallery';
import Pagination from '@components/Pagination/Pagination';
import { usePagination } from '@context/PageContext';
import { useDebounce } from '@hooks/useDebounce';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const { currentPage, query, isSorted, setCurrentPage, setQuery, setIsSorted } = usePagination();
  const debouncedValue = useDebounce(query, 5000);
  const [art, setArt] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchArt(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isSorted, debouncedValue]);

  const fetchArt = async (query: string) => {
    try {
      setIsLoading(true);
      console.log(query);
      const res = await axios.get(`https://api.artic.edu/api/v1/artworks/search`, {
        params: {
          q: query,
          size: 5,
          from: (currentPage - 1) * 5,
          sort: isSorted ? 'title.keyword' : '',
        },
      });

      setTotal(res.data.pagination.total);
      setArt(res.data.data.map((item: { id: number }) => item.id));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page);
  };

  return (
    <>
      <Header id={1} />
      <main className="main">
        <h1 className="page-title">
          Let's Find Some <span className="page-title-highlight">Art</span> Here!
        </h1>

        <form className="form">
          <input
            placeholder="Search art, artist, work..."
            type="text"
            name="art"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form__field"
          />
          <button type="button">
            <img src={images.search} alt="Search" />
          </button>
        </form>

        <button
          onClick={() => setIsSorted(!isSorted)}
          className={`set-sort-button ${isSorted ? 'set-sort-button--active' : ''}`}
        >
          <img src={images.abc} />
          <p> Sort in alphabetical order</p>
        </button>

        <section>
          <h3 className="section__subtitle">Topics for you</h3>
          <h2 className="section__title">Our special gallery</h2>
          {isLoading ? <Loader /> : <MainGallery art_ids={art} />}
        </section>

        <Pagination total={total > 990 ? 990 : total} currentPage={currentPage} onPageChange={handlePageChange} />

        <section className="section-other-gallery">
          <h3 className="section__subtitle">Here some more</h3>
          <h2 className="section__title">Other works for you</h2>
          <OtherGallery />
        </section>
      </main>
      <Footer />
    </>
  );
}
