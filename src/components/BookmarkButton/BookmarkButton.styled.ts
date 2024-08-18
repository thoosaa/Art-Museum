import styled, { css } from 'styled-components'

export const Button = styled.button<{ $relative?: boolean }>`
  ${({ theme }) => theme.mixins.flexCenter};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  padding: 18px;
  margin-left: auto;

  ${({ $relative }) =>
    $relative &&
    css`
      width: 60px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 16px;
      background-color: ${({ theme }) => theme.colors.white};
    `}
`
