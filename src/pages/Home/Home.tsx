import { Formik, Form, Field } from 'formik';
import { z } from 'zod';
import { withZodSchema } from 'formik-validator-zod';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import search_icon from '@assets/images/search.svg';
import './Home.scss';
import MainGallery from '@components/MainGallery/MainGallery';

const artSchema = z.object({
  art: z.string().min(1),
});

export default function Home() {
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
            console.log('submit', value);
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

        <MainGallery />
      </main>
      <Footer />
    </>
  );
}
