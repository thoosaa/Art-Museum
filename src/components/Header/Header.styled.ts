import styled from 'styled-components'

export const HeaderBurgerList = styled.ul`
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  padding-top: 20px;
  transition: all 0.3s ease-in-out;

  &.overlay {
    visibility: visible;
    opacity: 1;
    padding-top: 200px;
    background: rgba(72, 72, 72, 0.8);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & {
      display: none;
    }
  }
`

export const HeaderBurger = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  overflow: visible;
  position: relative;
  z-index: 2;

  span,
  span:before,
  span:after {
    background: ${({ theme }) => theme.colors.white};
    display: block;
    height: 2px;
    opacity: 1;
    position: absolute;
    transition: 0.3s ease-in-out;
  }

  span:before,
  span:after {
    content: '';
  }

  span:before {
    left: 0px;
    top: -10px;
    width: 30px;
  }

  span {
    right: 0px;
    top: 15px;
    width: 30px;
  }

  span:after {
    left: 0px;
    top: 10px;
    width: 30px;
  }

  &.close {
    span:before {
      top: 0px;
      transform: rotate(90deg);
      width: 30px;
    }

    span {
      transform: rotate(-45deg);
      top: 15px;
      width: 30px;
    }

    span:after {
      top: 0px;
      left: 0;
      transform: rotate(90deg);
      opacity: 0;
      width: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & {
      display: none;
    }
  }
`

export const HeaderList = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & {
      display: flex;
      gap: 16px;
    }
  }
`

export const HeaderStyled = styled.header`
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  ${({ theme }) => theme.mixins.flexSpace};

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
