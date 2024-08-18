import { images } from '@assets/images/images'
import { BookmarkButton } from '@components/BookmarkButton/BookmarkButton'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Loader from '@components/Loader/Loader'
import { IMAGE_SIZE, IMAGE_URL } from '@constants/api_routes'
import { useArtPiece } from '@hooks/useArtPiece'
import { useParams } from 'react-router-dom'

import {
  ArtImage,
  Artist,
  ArtPieceBlock,
  Info,
  Overview,
  Period,
  Title,
  YellowHighlight,
} from './ArtPiece.styled'

export default function ArtPiece() {
  const params = useParams<{ artId?: string }>()
  const artId = params.artId ?? ''
  const { artPieceInfo, isLoading, error } = useArtPiece(artId)

  const title = artPieceInfo?.title || ''
  const artist = artPieceInfo?.artist || ''
  const imageId = artPieceInfo?.image_id || '0'
  const dateStart = artPieceInfo?.date_start || ''
  const dateEnd = artPieceInfo?.date_end || ''
  const nationality = artPieceInfo?.nationality || ''
  const dimensions = artPieceInfo?.dimensions || ''
  const creditLine = artPieceInfo?.credit_line || ''
  const repository = artPieceInfo?.repository || ''
  const isPublicText = artPieceInfo?.is_public ? 'Public' : 'Copywrite'

  const imgSource = `${IMAGE_URL}/${imageId}/${IMAGE_SIZE}`

  if (error) {
    return <Title>{error}</Title>
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header amountOfLinks={2} />
      <ArtPieceBlock className='main'>
        <ArtImage>
          <img
            alt='Picture'
            src={imgSource}
            onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
          />

          <BookmarkButton art_id={artId} relative={true} className='bookmark-button' />
        </ArtImage>

        <Info>
          <div>
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
            <Period>{dateStart === dateEnd ? dateEnd : `${dateStart}-${dateEnd}`}</Period>
          </div>

          <Overview>
            <Title>Overview</Title>
            <p>
              <YellowHighlight>Artist nationality: </YellowHighlight>
              {nationality}
            </p>
            <p>
              <YellowHighlight>Dimensions: </YellowHighlight>
              {dimensions}
            </p>
            <p>
              <YellowHighlight>Credit line: </YellowHighlight>
              {creditLine}
            </p>
            <p>
              <YellowHighlight>Repository: </YellowHighlight>
              {repository}
            </p>
            <p>{isPublicText}</p>
          </Overview>
        </Info>
      </ArtPieceBlock>
      <Footer />
    </>
  )
}
