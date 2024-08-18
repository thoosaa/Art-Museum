export interface ArtPieceInfo {
  title: string
  artist: string
  image_id: string
  date_start: string
  date_end: string
  nationality: string
  dimensions: string
  credit_line: string
  repository: string
  is_public: boolean
}

export interface ArtPieceInfoBasic {
  title: string
  artist: string
  image_id: string
  is_public: boolean
}

export interface ArtCardProps {
  art_id: string
}

export interface ArtCardPropsSmall {
  art_id: string
}

export interface BookmarkButtonProps {
  art_id: string
  relative?: boolean
  className?: string
}

export interface HeaderProps {
  amountOfLinks: number
}

export interface HeaderListProps {
  src: string
  link: string
  title: string
  isBurger: boolean
}

export interface MainGalleryProps {
  art_ids: string[]
}

export interface PaginationProps {
  total: number
  currentPage: number
  onPageChange: (page: number) => void
}

export interface PaginationContextProps {
  currentPage: number
  query: string
  isSorted: boolean
  setCurrentPage: (page: number) => void
  setQuery: (query: string) => void
  setIsSorted: (sort: boolean) => void
}
