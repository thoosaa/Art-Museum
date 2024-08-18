import styled from 'styled-components'

export const HeaderItem = styled.li`
  ${({ theme }) => theme.mixins.flexSpace};
  ${({ theme }) => theme.mixins.font(theme.colors.white, 18, 400)};
  gap: 4px;

  &.bigger {
    font-size: 35px;
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 10px;
  }
`

export const HeaderIcon = styled.img`
  &.bigger {
    width: 35px;
  }
`
