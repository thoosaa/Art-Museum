import { Link } from 'react-router-dom'
import { HeaderListProps } from 'types/types'

import { HeaderIcon, HeaderItem } from './HeaderLink.styled'

export function HeaderLink({ src, link, title, isBurger }: HeaderListProps) {
  const hasBurgerStyle = isBurger ? 'bigger' : ''

  return (
    <HeaderItem className={hasBurgerStyle}>
      <HeaderIcon src={src} alt='Bookmark' className={hasBurgerStyle} />
      <Link to={link}>{title}</Link>
    </HeaderItem>
  )
}
