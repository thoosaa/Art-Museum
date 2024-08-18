import styled from 'styled-components'

export const FooterStyled = styled.footer`
  ${({ theme }) => theme.mixins.flexSpace};
  background-color: ${({ theme }) => theme.colors.white};

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
