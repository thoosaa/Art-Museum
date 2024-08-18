import { images } from '@assets/images/images'
import { HeaderLink } from '@components/HeaderLink/HeaderLink'
import { useBurgerMenu } from '@hooks/useBurgerMenu'
import { useScrollLock } from '@hooks/useScrollLock'
import { memo, useEffect } from 'react'
import { HeaderProps } from 'types/types'

import { HeaderBurger, HeaderBurgerList, HeaderList, HeaderStyled } from './Header.styled'

function Header({ amountOfLinks }: HeaderProps) {
  const [isOpen, isOverlay, toggle] = useBurgerMenu()
  const [lockScroll, unlockScroll] = useScrollLock()

  useEffect(() => {
    if (isOpen) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isOpen, lockScroll, unlockScroll])

  const hasOverlayStyle = isOverlay ? 'overlay' : ''
  const hasOpenStyle = isOpen ? 'close' : ''

  return (
    <>
      <HeaderBurgerList className={hasOverlayStyle}>
        {amountOfLinks === 2 ? (
          <HeaderLink src={images.home} link='/' title='Home' isBurger={true} />
        ) : (
          ''
        )}
        <HeaderLink
          src={images.bookmark}
          link='/favorites'
          title='Your favorites'
          isBurger={true}
        />
      </HeaderBurgerList>

      <HeaderStyled>
        <img src={images.museum_logo} alt='Museum logo' />

        <HeaderBurger className={hasOpenStyle} onClick={toggle}>
          <span></span>
        </HeaderBurger>

        <HeaderList>
          {amountOfLinks === 2 ? (
            <HeaderLink src={images.home} link='/' title='Home' isBurger={false} />
          ) : (
            ''
          )}
          <HeaderLink
            src={images.bookmark}
            link='/favorites'
            title='Your favorites'
            isBurger={false}
          />
        </HeaderList>
      </HeaderStyled>
    </>
  )
}

export default memo(Header)
