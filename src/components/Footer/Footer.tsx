import { images } from '@assets/images/images'

import { FooterStyled } from './Footer.styled'

export default function Footer() {
  return (
    <FooterStyled>
      <img src={images.museum_logo_black} alt='Museum logo' />
      <img src={images.modsen_logo} alt='Museum logo' />
    </FooterStyled>
  )
}
