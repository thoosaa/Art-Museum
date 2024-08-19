import { images } from '@assets/images/images'
import sessionStorage from '@utils/sessionStorage/sessionStorage'
import { MouseEvent, useCallback, useState } from 'react'

export function useBookmark(art_id: string) {
  const [bookmarkImg, setBookmarkImg] = useState<string>(
    sessionStorage.has(art_id) ? images.bookmark_orange_fill : images.bookmark_orange,
  )

  const addRemoveArtPiece = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()

      if (sessionStorage.has(art_id)) {
        sessionStorage.remove(art_id)
        setBookmarkImg(images.bookmark_orange)
        return
      }

      sessionStorage.add(art_id)
      setBookmarkImg(images.bookmark_orange_fill)
    },
    [art_id],
  )

  return { bookmarkImg, addRemoveArtPiece }
}
