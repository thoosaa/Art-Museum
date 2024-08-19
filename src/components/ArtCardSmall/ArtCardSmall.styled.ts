import styled from 'styled-components'

export const SmallArtBlock = styled.figure`
  ${({ theme }) => theme.mixins.flexLeft};
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayBorder};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  width: 416px;
  cursor: pointer;
`

export const ArtBlockImage = styled.img`
  object-fit: cover;
`

export const Title = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, theme.fontSizes.md, 500)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-bottom: 2px;
`

export const Artist = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.yellow, theme.fontSizes.sm, 400)};
  padding: 3px 0 12px 0;
`

export const Availability = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, theme.fontSizes.sm, 700)};
`
