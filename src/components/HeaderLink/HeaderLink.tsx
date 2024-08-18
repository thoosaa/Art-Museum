import { Link } from 'react-router-dom'
import { HeaderListProps } from 'types/types'

import { HeaderIcon, HeaderItem } from './HeaderLink.styled'

export function HeaderLink({ src, link, title, isBurger }: HeaderListProps) {
  return (
    <HeaderItem className={isBurger ? 'bigger' : ''}>
      <HeaderIcon src={src} alt='Bookmark' className={isBurger ? 'bigger' : ''} />
      <Link to={link}>{title}</Link>
    </HeaderItem>
  )
}
