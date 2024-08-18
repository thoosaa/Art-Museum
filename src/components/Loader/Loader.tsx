import { images } from '@assets/images/images'

import { LoaderStyled } from './Loader.styled'

export default function Loader() {
  return (
    <LoaderStyled>
      <img src={images.loader} alt='loader image' />
    </LoaderStyled>
  )
}
