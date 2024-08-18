import { useBookmark } from '@hooks/useBookmark'
import { BookmarkButtonProps } from 'types/types'

import { Button } from './BookmarkButton.styled'

export function BookmarkButton({ art_id, className = '', relative = false }: BookmarkButtonProps) {
  const { bookmarkImg, addRemoveArtPiece } = useBookmark(art_id)
  return (
    <Button onClick={addRemoveArtPiece} $relative={relative} className={className}>
      <img src={bookmarkImg} alt='Bookmark' width='24' />
    </Button>
  )
}
