import { images } from '@assets/images/images'
import { BookmarkButton } from '@components/BookmarkButton/BookmarkButton'
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes'
import { useArtCard } from '@hooks/useArtCard'
import { useNavigate } from 'react-router-dom'
import { ArtCardPropsSmall } from 'types/types'

import { ArtBlockImage, Author, Availability, SmallArtBlock, Title } from './ArtCardSmall.styled'

export default function ArtCardSmall({ art_id }: ArtCardPropsSmall) {
  const { artPieceInfo, isLoading, error } = useArtCard(art_id)
  const navigate = useNavigate()

  const title = artPieceInfo?.title || ''
  const artist = artPieceInfo?.artist || ''
  const avialabilityText = artPieceInfo?.is_public ? 'Public' : 'Copywrite'
  const imageId = artPieceInfo?.image_id || '0'

  const imgSource = `${IMAGE_URL}/${imageId}/${IMAGE_SIZE}`

  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <img src={images.loader_image} alt='loader image' />
  }

  return (
    <SmallArtBlock onClick={() => navigate(`/art/${art_id}`)}>
      <ArtBlockImage
        alt='Picture'
        src={imgSource}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width='80'
        height='80'
        loading='lazy'
      />

      <figcaption>
        <>
          <Title>{title}</Title>
          <Author>{artist}</Author>
          <Availability>{avialabilityText}</Availability>
        </>
      </figcaption>

      <BookmarkButton art_id={art_id} />
    </SmallArtBlock>
  )
}
