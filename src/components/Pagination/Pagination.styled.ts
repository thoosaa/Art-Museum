import styled from 'styled-components'

export const PaginationStyled = styled.ul`
  padding: 16px;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`
export const PaginationItem = styled.li`
  ${({ theme }) => theme.mixins.font(theme.colors.gray, 18, 300)};
  padding: 7px 0px;

  &.active {
    ${({ theme }) => theme.mixins.font(theme.colors.white, 18, 600)};
    background-color: ${({ theme }) => theme.colors.orange};
    padding: 7px 10px;
    border-radius: 5px;
  }

  &.disabled {
    color: variables.$white-gray;
  }
`
