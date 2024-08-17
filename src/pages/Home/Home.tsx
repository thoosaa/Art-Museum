import './Home.scss';

import { images } from '@assets/images/images';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Loader from '@components/Loader/Loader';
import MainGallery from '@components/MainGallery/MainGallery';
import OtherGallery from '@components/OtherGalley/OtherGallery';
import Pagination from '@components/Pagination/Pagination';
import { usePagination } from '@context/PageContext/PageContext';
import { useSearch } from '@hooks/useSearch';
import { useState } from 'react';
import { z } from 'zod';

const artValidationSchema = z
  .string()
  .min(1, 'Empty string')
  .max(40, 'Too many characters')
  .regex(/^[a-zA-Z0-9 ' " \-,. \s]*$/, 'Invalid characters');

export default function Home() {
  const { currentPage, isSorted, query, setCurrentPage, setQuery, setIsSorted } = usePagination();
  const { isLoading, error, art, total } = useSearch();
  const [formError, setFormError] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
    const res = artValidationSchema.safeParse(e.target.value);
    if (res.success) {
      setQuery(e.target.value);
      setFormError('');
    } else {
      console.log(res.error.format());
      setFormError(res.error.format()._errors[0]);
      setQuery('');
    }
  };

  return (
    <>
      <Header id={1} />
      <main className="main">
        <h1 className="page-title">
          Let's Find Some <span className="page-title-highlight">Art</span> Here!
        </h1>

        <form className={`form ${formError ? 'input-error' : ''}`}>
          <input
            placeholder="Search art, artist, work..."
            type="text"
            name="art"
            value={value || query}
            onChange={onChange}
            className="form__field"
          />
          {formError && <p className="form-error">{formError}</p>}
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
          {error ? <h1>{error}</h1> : isLoading ? <Loader /> : <MainGallery art_ids={art} />}
        </section>

        <Pagination
          total={total > 990 ? 990 : total}
          currentPage={currentPage}
          onPageChange={(page: number) => {
            setCurrentPage(page);
            console.log(page);
          }}
        />

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
