import { BASE_URL, SEARCH_ENDPOINT } from '@constants/api_routes'
import { usePagination } from '@context/PageContext/PageContext'
import getErrorMessage from '@utils/helperFunctions/getErrorMessage'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

import { useDebounce } from './useDebounce'

export function useSearch() {
  const { currentPage, query, isSorted } = usePagination()
  const debouncedValue = useDebounce(query, 500)
  const [art, setArt] = useState<string[]>([])
  const [total, setTotal] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchArt = useCallback(async () => {
    try {
      const body = {
        params: {
          q: query || debouncedValue,
          size: 5,
          from: (currentPage - 1) * 5,
          sort: isSorted ? 'title.keyword' : '',
        },
      }

      const res = await axios.get(`${BASE_URL}/${SEARCH_ENDPOINT}`, body)

      setTotal(res.data.pagination.total)
      setArt(res.data.data.map((item: { id: number }) => item.id))
    } catch (error) {
      setError(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, debouncedValue, isSorted, query])

  useEffect(() => {
    fetchArt()
  }, [fetchArt])

  return { isLoading, error, art, total }
}
