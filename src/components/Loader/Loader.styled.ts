import styled from 'styled-components'

export const LoaderStyled = styled.div`
  width: 100%;
  margin: 100px 0;
  ${({ theme }) => theme.mixins.flexCenter};
`
