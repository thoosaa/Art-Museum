import styled from 'styled-components'

export const ArtBlock = styled.figure`
  position: relative;
  min-height: 200px;
  width: 305px;
  margin-bottom: 75px;
  background-color: variables.$light-orange;
  cursor: pointer;
`
export const Description = styled.figcaption`
  ${({ theme }) => theme.mixins.flexSpace};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrayBorder};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 86%;
  padding: 17px 24px;
`

export const Title = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, 18, 500)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-bottom: 2px;
`

export const Author = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.yellow, 16, 400)};
  padding: 3px 0 12px 0;
`

export const Availability = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, 16, 700)};
`
