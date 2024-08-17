import { createContext, ReactNode, useContext, useState } from 'react'
import { PaginationContextProps } from 'types/types'

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined)

const PaginationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [query, setQuery] = useState<string>('')
  const [isSorted, setIsSorted] = useState<boolean>(false)

  return (
    <PaginationContext.Provider
      value={{ currentPage, query, isSorted, setCurrentPage, setQuery, setIsSorted }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = () => {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { PaginationProvider, usePagination }
