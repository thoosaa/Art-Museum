import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
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
import './Home.scss';

const artSchema = z.object({
  art: z.string().min(1),
});

export default function Home() {
  const [art, setArt] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchArt();
  }, [currentPage]);

  const fetchArt = async (query: string = '') => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://api.artic.edu/api/v1/artworks/search`, {
        params: {
          q: query,
          size: 5,
          from: (currentPage - 1) * 5,
        },
      });

      setTotal(res.data.pagination.total);
      setArt(res.data.data.map((item) => item.id));
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
      <Header />
      <main className="main">
        <h1 className="page-title">
          Let's Find Some <span className="page-title-highlight">Art</span> Here!
        </h1>

        <Formik
          initialValues={{
            art: '',
          }}
          validate={withZodSchema(artSchema)}
          onSubmit={(value) => {
            fetchArt(value.art);
          }}
        >
          {({ errors, touched }) => (
            <Form className={`form ${errors.art && touched.art ? 'input-error' : ''}`}>
              <Field placeholder="Search art, artist, work..." type="text" name="art" className={`form__field`} />
              <button type="submit">
                <img src={search_icon} alt="Search" />
              </button>
            </Form>
          )}
        </Formik>

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
