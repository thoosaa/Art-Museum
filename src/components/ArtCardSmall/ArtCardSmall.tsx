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

  return error ? (
    <p>{error}</p>
  ) : isLoading ? (
    <img src={images.loader_image} />
  ) : (
    <SmallArtBlock onClick={() => navigate(`/art/${art_id}`)}>
      <ArtBlockImage
        alt='Picture'
        src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
        onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
        width='80'
        height='80'
        loading='lazy'
      />
      <figcaption>
        <div>
          <Title>{artPieceInfo?.title}</Title>
          <Author>{artPieceInfo?.artist}</Author>
          <Availability>{artPieceInfo?.is_public ? 'Public' : 'Copywrite'}</Availability>
        </div>
      </figcaption>
      <BookmarkButton art_id={art_id} />
    </SmallArtBlock>
  )
}
