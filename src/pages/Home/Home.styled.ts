import styled from 'styled-components'

export const SortButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto 100px auto;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: ${({ theme }) => theme.colors.white};

  &.active {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }
`
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
  color: ${({ theme }) => theme.colors.orange};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    &::after {
      content: '';
      display: block;
    }
  }
`

export const Section = styled.section`
  margin-top: 154px;
`

export const Form = styled.form`
  ${({ theme }) => theme.mixins.flexSpace};
  max-width: 762px;
  flex: 1 1 auto;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin: 72px auto 20px auto;
  padding: 16px;
  border-radius: 16px;

  &.input-error {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`

export const FormError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: block;
`

export const FormField = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: none;
  width: 75%;
  background-color: inherit;
`
export const Main = styled.main`
  margin: 88px 0;
  padding: ${({ theme }) => theme.grid.padding.xs};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    & {
      padding: ${({ theme }) => theme.grid.padding.sm};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & {
      padding: ${({ theme }) => theme.grid.padding.md};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    & {
      padding: ${({ theme }) => theme.grid.padding.lg};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    & {
      padding: ${({ theme }) => theme.grid.padding.xl};
    }
  }
`
