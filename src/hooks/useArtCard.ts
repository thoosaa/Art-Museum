import { BASE_URL } from '@constants/api_routes'
import getErrorMessage from '@utils/helperFunctions/getErrorMessage'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ArtPieceInfoBasic } from 'types/types'

export function useArtCard(id: string) {
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfoBasic>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchArtPiece = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`)
      const info = res.data.data

      const formattedArtPiece = {
        title: info.title,
        artist: info.artist_title,
        image_id: info.image_id,
        is_public: info.is_public_domain,
      }

      setArtPieceInfo(formattedArtPiece)
    } catch (error) {
      setError(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchArtPiece()
  }, [fetchArtPiece])

  return { artPieceInfo, isLoading, error }
}
