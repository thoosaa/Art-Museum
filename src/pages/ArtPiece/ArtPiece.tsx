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
  const { artPieceInfo, isLoading, error } = useArtPiece(params.artId ?? '')

  return (
    <>
      <Header amountOfLinks={2} />
      {error ? (
        <h1 className='page-title main'>{error}</h1>
      ) : isLoading ? (
        <Loader />
      ) : (
        <ArtPieceBlock className='main'>
          <ArtImage>
            <img
              alt='Picture'
              src={`${IMAGE_URL}${artPieceInfo?.image_id}${IMAGE_SIZE}`}
              onError={(e) => (e.currentTarget.src = images.museum_logo_icon)}
            />
            <BookmarkButton
              art_id={params.artId ?? ''}
              relative={true}
              className='bookmark-button'
            />
          </ArtImage>
          <Info>
            <div>
              <Title>{artPieceInfo?.title}</Title>
              <Artist>{artPieceInfo?.artist}</Artist>
              <Period>
                {artPieceInfo?.date_start === artPieceInfo?.date_end
                  ? artPieceInfo?.date_end
                  : `${artPieceInfo?.date_start}-${artPieceInfo?.date_end}`}
              </Period>
            </div>
            <Overview>
              <Title>Overview</Title>
              <p>
                <YellowHighlight>Artist nationality: </YellowHighlight>
                {artPieceInfo?.nationality}
              </p>
              <p>
                <YellowHighlight>Dimensions: </YellowHighlight>
                {artPieceInfo?.dimensions}
              </p>
              <p>
                <YellowHighlight>Credit line: </YellowHighlight>
                {artPieceInfo?.credit_line}
              </p>
              <p>
                <YellowHighlight>Repository: </YellowHighlight>
                {artPieceInfo?.repository}
              </p>
              <p>{artPieceInfo?.is_public ? 'Public' : 'Copywrite'}</p>
            </Overview>
          </Info>
        </ArtPieceBlock>
      )}

      <Footer />
    </>
  )
}
