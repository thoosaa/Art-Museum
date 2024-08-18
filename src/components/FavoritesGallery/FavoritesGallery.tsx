import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall'

import { Gallery } from './FavoritesGallery.styled'

export default function FavoritesGallery() {
  const sessionStorageKeys = Object.keys(sessionStorage) || []

  return (
    <Gallery>
      {sessionStorageKeys.map((id) => (
        <ArtCardSmall art_id={id} key={id} />
      ))}
    </Gallery>
  )
}
