import styled from 'styled-components'

export const YellowHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`
export const Title = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, 32, 400)};
  line-height: 40px;
  text-align: left;
  margin-bottom: 16px;
`

export const Artist = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.yellow, 24, 400)};
  line-height: 30px;
  text-align: left;
  margin: 16px 0 16px 0;
`

export const Period = styled.p`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, 16, 700)};
  line-height: 20px;
  text-align: left;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 174px;
`

export const ArtPieceBlock = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  gap: 80px;

  @media (max-width: 980.98px) {
    & {
      flex-direction: column;
      gap: 40px;
    }
    
    .bookmark-button{
      right: 7%;
    }
`

export const ArtImage = styled.div`
  position: relative;

  img {
    width: 480px;
    object-fit: contain;
  }

  @media (max-width: 980.98px) {
    &{
      ${({ theme }) => theme.mixins.flexCenter};
    }

    & img{
      width: 85%;
    }
`

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
