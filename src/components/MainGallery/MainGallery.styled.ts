import styled from 'styled-components'

export const Gallery = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  margin-top: 40px;
  gap: 4%;
  flex-wrap: wrap;
`
