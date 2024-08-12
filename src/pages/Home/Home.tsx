import { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { withZodSchema } from 'formik-validator-zod';
import axios from 'axios';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainGallery from '@components/MainGallery/MainGallery';
import OtherGallery from '@components/OtherGalley/OtherGallery';
import Pagination from '@components/Pagination/Pagination';
import Loader from '@components/Loader/Loader';
import search_icon from '@assets/images/search.svg';
import abc from '@assets/images/abc.svg';
import debounce from '@utils/helperFunctions/debounce';
import './Home.scss';
import { usePagination } from '@context/PageContext';

const artSchema = z.object({
  art: z.string().min(1),
});

export default function Home() {
  const { currentPage, query, isSorted, setCurrentPage, setQuery, setIsSorted } = usePagination();
  const [art, setArt] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(1);
  //const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //const [sort, setSort] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: { art: query },
    validate: withZodSchema(artSchema),
    onSubmit: (values) => {
      setQuery(values.art);
      fetchArt();
    },
  });

  const debouncedSubmit = useCallback(
    debounce(() => {
      if (query !== formik.values.art) {
        setCurrentPage(1);
      }
      formik.submitForm();
    }, 1000),
    [query, formik.values.art],
  );

  useEffect(() => {
    if (formik.values.art) {
      debouncedSubmit();
    }
  }, [formik.values.art, debouncedSubmit]);

  useEffect(() => {
    setQuery(formik.values.art);
    fetchArt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isSorted]);

  const fetchArt = async () => {
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

        <form className={`form ${formik.errors.art && formik.touched.art ? 'input-error' : ''}`}>
          <input
            placeholder="Search art, artist, work..."
            type="text"
            name="art"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.art}
            className="form__field"
          />
          <button type="button">
            <img src={search_icon} alt="Search" />
          </button>
        </form>

        <button
          onClick={() => setIsSorted(!isSorted)}
          className={`set-sort-button ${isSorted ? 'set-sort-button--active' : ''}`}
        >
          <img src={abc} />
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
