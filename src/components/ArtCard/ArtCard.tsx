import { images } from '@assets/images/images'
import { BookmarkButton } from '@components/BookmarkButton/BookmarkButton'
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes'
import { useArtCard } from '@hooks/useArtCard'
import { useNavigate } from 'react-router-dom'
import { ArtCardProps } from 'types/types'

import { ArtBlock, Author, Availability, Description, Title } from './ArtCard.styled'

export default function ArtCard({ art_id }: ArtCardProps) {
  const { artPieceInfo, isLoading, error } = useArtCard(art_id)
  const navigate = useNavigate()

  const title = artPieceInfo?.title || ''
  const artist = artPieceInfo?.artist || ''
  const avialabilityText = artPieceInfo?.is_public ? 'Public' : 'Copyright'
  const imageId = artPieceInfo?.image_id || '0'

  const imgSource = `${IMAGE_URL}/${imageId}/${IMAGE_SIZE}`

  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <img src={images.loader_image} loading='lazy' />
  }

  return (
    <ArtBlock onClick={() => navigate(`/art/${art_id}`)}>
      <img
        alt='Picture'
        src={imgSource}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width='305'
        loading='lazy'
      />

      <Description>
        <div>
          <Title>{title}</Title>
          <Author>{artist}</Author>
          <Availability>{avialabilityText}</Availability>
        </div>

        <BookmarkButton art_id={art_id} />
      </Description>
    </ArtBlock>
  )
}
