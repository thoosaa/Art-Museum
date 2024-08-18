import { images } from '@assets/images/images'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Loader from '@components/Loader/Loader'
import MainGallery from '@components/MainGallery/MainGallery'
import OtherGallery from '@components/OtherGalley/OtherGallery'
import Pagination from '@components/Pagination/Pagination'
import { usePagination } from '@context/PageContext/PageContext'
import { useSearch } from '@hooks/useSearch'
import { useValidate } from '@hooks/useValidate'

import {
  Form,
  FormError,
  FormField,
  Main,
  Section,
  SectionSubtitle,
  SectionTitle,
  SortButton,
  Title,
  TitleHighlight,
} from './Home.styled'

export default function Home() {
  const { currentPage, isSorted, query, setCurrentPage, setIsSorted } = usePagination()
  const { isLoading, error, art, total } = useSearch()
  const { value, formError, onChange } = useValidate()

  return (
    <>
      <Header amountOfLinks={1} />
      <Main>
        <Title>
          Let's Find Some <TitleHighlight>Art</TitleHighlight> Here!
        </Title>

        <Form className={formError ? 'input-error' : ''}>
          <FormField
            placeholder='Search art, artist, work...'
            type='text'
            name='art'
            value={value || query}
            onChange={onChange}
          />
          {formError && <FormError>{formError}</FormError>}
          <button type='button'>
            <img src={images.search} alt='Search' />
          </button>
        </Form>

        <SortButton onClick={() => setIsSorted(!isSorted)} className={isSorted ? 'active' : ''}>
          <img src={images.abc} />
          <p> Sort in alphabetical order</p>
        </SortButton>

        <section>
          <SectionSubtitle>Topics for you</SectionSubtitle>
          <SectionTitle>Our special gallery</SectionTitle>

          {error ? <Title>{error}</Title> : isLoading ? <Loader /> : <MainGallery art_ids={art} />}
        </section>

        <Pagination
          total={total > 990 ? 990 : total}
          currentPage={currentPage}
          onPageChange={(page: number) => {
            setCurrentPage(page)
            console.log(page)
          }}
        />

        <Section>
          <SectionSubtitle>Here some more</SectionSubtitle>
          <SectionTitle>Other works for you</SectionTitle>
          <OtherGallery />
        </Section>
      </Main>
      <Footer />
    </>
  )
}
