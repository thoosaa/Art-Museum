import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { z } from 'zod';
import { withZodSchema } from 'formik-validator-zod';
import axios from 'axios';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainGallery from '@components/MainGallery/MainGallery';
import OtherGallery from '@components/OtherGalley/OtherGallery';
import search_icon from '@assets/images/search.svg';
import './Home.scss';

const artSchema = z.object({
  art: z.string().min(1),
});

export default function Home() {
  const [art, setArt] = useState<string[]>([]);

  useEffect(() => {
    fetchArt();
  }, []);

  const fetchArt = async (query: string = '') => {
    try {
      const res = await axios.get(`https://api.artic.edu/api/v1/artworks/search`, {
        params: {
          q: query,
          size: 5,
          from: 1,
        },
      });

      setArt(res.data.data.map((item) => item.id));
    } catch (err) {
      console.log(err);
    }
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

        <MainGallery art_ids={art} />
        <OtherGallery />
      </main>
      <Footer />
    </>
  );
}
