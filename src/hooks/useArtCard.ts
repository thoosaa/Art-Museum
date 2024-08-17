import { BASE_URL } from '@constants/api_routes'
import getErrorMessage from '@utils/helperFunctions/getErrorMessage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ArtPieceInfoBasic } from 'types/types'

export function useArtCard(id: string) {
  const [artPieceInfo, setArtPieceInfo] = useState<ArtPieceInfoBasic>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchArtPiece = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${BASE_URL}/${id}`)
        const info = res.data.data

        setArtPieceInfo({
          title: info.title,
          artist: info.artist_title,
          image_id: info.image_id,
          is_public: info.is_public_domain,
        })
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching art piece:', error)
        setError(getErrorMessage(error))
      }
    }
    fetchArtPiece()
  }, [id])

  return { artPieceInfo, isLoading, error }
}
