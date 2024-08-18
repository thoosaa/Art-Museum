import ArtCard from '@components/ArtCard/ArtCard'
import { MainGalleryProps } from 'types/types'

import { Gallery } from './MainGallery.styled'

export default function MainGallery({ art_ids }: MainGalleryProps) {
  return (
    <Gallery>
      {art_ids.map((id) => (
        <ArtCard art_id={id} key={id} />
      ))}
    </Gallery>
  )
}
