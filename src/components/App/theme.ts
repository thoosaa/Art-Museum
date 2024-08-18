export const theme = {
  colors: {
    white: '#ffffff',
    whiteGray: '#fafafa',
    gray: '#393939',
    lightGray: '#f0f0f0',
    lightGrayBorder: '#f0f0f1',
    orange: '#f17900',
    red: '#f10000',
    yellow: '#e0a449',
    lightOrange: '#fef3e8',
  },
  font: `Lexend Deca, sans-serif`,
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    xxl: '35px',
    xxxl: '64px',
  },
  mixins: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexSpace: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    flexLeft: `
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
    font: (color: string, size: string, weight: string) => `
      color: ${color};
      font-size: ${size};
      font-weight: ${weight};
    `,
  },
  grid: {
    padding: {
      xs: '32px 23px',
      sm: '32px calc(50% - 290px)',
      md: '32px calc(50% - 360px)',
      lg: '32px calc(50% - 480px)',
      xl: '32px calc(50% - 640px)',
    },
  },
  breakpoints: {
    xs: 0,
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1371.98,
  },
}
