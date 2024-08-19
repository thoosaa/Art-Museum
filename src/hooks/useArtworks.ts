import { BASE_URL } from '@constants/api_routes'
import getErrorMessage from '@utils/helperFunctions/getErrorMessage'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const NUMBER_OF_ARTWORKS = 9

export function useArtworks() {
  const [art, setArt] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchArt = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}?limit=${NUMBER_OF_ARTWORKS}`)

      setArt(res.data.data.map((item: { id: number }) => item.id))
    } catch (error) {
      setError(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchArt()
  }, [fetchArt])

  return { art, isLoading, error }
}
