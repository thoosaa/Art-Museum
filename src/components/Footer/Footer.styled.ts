import styled from 'styled-components'

export const FooterStyled = styled.footer`
  ${({ theme }) => theme.mixins.flexSpace};
  background-color: ${({ theme }) => theme.colors.white};
`
