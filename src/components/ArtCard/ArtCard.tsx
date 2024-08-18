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

  return error ? (
    <p>{error}</p>
  ) : isLoading ? (
    <img src={images.loader_image} loading='lazy' />
  ) : (
    <ArtBlock onClick={() => navigate(`/art/${art_id}`)}>
      <img
        alt='Picture'
        src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width='305'
        loading='lazy'
      />
      <Description>
        <div>
          <Title>{artPieceInfo?.title}</Title>
          <Author>{artPieceInfo?.artist}</Author>
          <Availability>{artPieceInfo?.is_public ? 'Public' : 'Copyright'}</Availability>
        </div>
        <BookmarkButton art_id={art_id} />
      </Description>
    </ArtBlock>
  )
}
