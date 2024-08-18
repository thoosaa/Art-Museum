import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall'
import Loader from '@components/Loader/Loader'
import { useArtworks } from '@hooks/useArtworks'

import { Gallery } from './OtherGallery.styled'

function OtherGallery() {
  console.log('other gallery rendered')
  const { art, isLoading, error } = useArtworks()

  return (
    <Gallery>
      {error ? (
        <h1>{error}</h1>
      ) : isLoading ? (
        <Loader />
      ) : (
        art.map((id) => <ArtCardSmall art_id={id} key={id} />)
      )}
    </Gallery>
  )
}

export default OtherGallery
