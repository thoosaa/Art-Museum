import { images } from '@assets/images/images'
import FavoritesGallery from '@components/FavoritesGallery/FavoritesGallery'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import { Section, SectionSubtitle, SectionTitle, Title, TitleHighlight } from './Favorites.styled'

export default function Favorites() {
  return (
    <>
      <Header amountOfLinks={2} />
      <main className='main'>
        <Title>
          Here Are Your{' '}
          <TitleHighlight>
            <img src={images.bookmark} alt='Bookmark' height='55' />
            Favorites
          </TitleHighlight>
        </Title>

        <Section>
          <SectionSubtitle>Saved by you</SectionSubtitle>
          <SectionTitle>Your favorites list</SectionTitle>
          <FavoritesGallery />
        </Section>
      </main>
      <Footer />
    </>
  )
}
