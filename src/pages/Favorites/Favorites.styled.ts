import styled from 'styled-components'

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 40px;
`
export const SectionSubtitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
`

export const Title = styled.h1`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, theme.fontSizes.xxxl, 700)};
  line-height: 80px;
  text-align: center;
`

export const TitleHighlight = styled.span`
  ${({ theme }) => theme.mixins.flexCenter};
  color: ${({ theme }) => theme.colors.orange};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    &::before {
      content: '';
      display: block;
    }
  }
`

export const Section = styled.section`
  margin-top: 120px;
`
