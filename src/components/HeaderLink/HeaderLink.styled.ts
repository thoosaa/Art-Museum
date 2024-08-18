import styled from 'styled-components'

export const HeaderItem = styled.li`
  ${({ theme }) => theme.mixins.flexSpace};
  ${({ theme }) => theme.mixins.font(theme.colors.white, theme.fontSizes.md, 400)};
  gap: 4px;

  &.bigger {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 10px;
  }
`

export const HeaderIcon = styled.img`
  &.bigger {
    width: 35px;
  }
`
