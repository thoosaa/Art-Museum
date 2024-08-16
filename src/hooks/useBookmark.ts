import bookmark from '@assets/images/bookmark-orange.svg';
import bookmark_fill from '@assets/images/bookmark-orange-fill.svg';
import sessionStorage from '@utils/sessionStorage/sessionStorage';
import { MouseEvent, useCallback, useState } from 'react';

export function useBookmark(art_id: string) {
  const [bookmarkImg, setBookmarkImg] = useState<string>(sessionStorage.has(art_id) ? bookmark_fill : bookmark);

  const addRemoveArtPiece = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (sessionStorage.has(art_id)) {
        console.log('remove existing');
        sessionStorage.remove(art_id);
        setBookmarkImg(bookmark);
      } else {
        console.log('add new');
        sessionStorage.add(art_id);
        setBookmarkImg(bookmark_fill);
      }
    },
    [art_id],
  );

  return { bookmarkImg, addRemoveArtPiece };
}
