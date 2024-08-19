import { BASE_URL } from '@constants/api_routes'
import getErrorMessage from '@utils/helperFunctions/getErrorMessage'
import getNationality from '@utils/helperFunctions/getNationality'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ArtPieceInfo } from 'types/types'

export function useArtPiece(id: string) {
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfo>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchArtPiece = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`)
      const info = res.data.data

      const formattedArtPiece = {
        title: info.title,
        artist: info.artist_title || 'Unknown',
        image_id: info.image_id,
        date_start: info.date_start,
        date_end: info.date_end,
        nationality: getNationality(info.artist_display) || 'Unknown',
        dimensions: info.dimensions,
        credit_line: info.credit_line,
        repository: info.gallery_title || 'Unknown',
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
