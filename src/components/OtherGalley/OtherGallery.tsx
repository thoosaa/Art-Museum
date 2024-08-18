import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall'
import Loader from '@components/Loader/Loader'
import { useArtworks } from '@hooks/useArtworks'

import { Gallery } from './OtherGallery.styled'

function OtherGallery() {
  const { art, isLoading, error } = useArtworks()

  if (error) {
    return <h1>{error}</h1>
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Gallery>
      {art.map((id) => (
        <ArtCardSmall art_id={id} key={id} />
      ))}
    </Gallery>
  )
}

export default OtherGallery
