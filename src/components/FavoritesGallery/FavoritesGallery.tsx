import ArtCardSmall from '@components/ArtCardSmall/ArtCardSmall'

import { Gallery } from './FavoritesGallery.styled'

export default function FavoritesGallery() {
  return (
    <Gallery>
      {Object.keys(sessionStorage).map((id) => (
        <ArtCardSmall art_id={id} key={id} />
      ))}
    </Gallery>
  )
}
