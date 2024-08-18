import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* Style reset */

  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  button,
  input[type='submit'],
  input[type='reset'] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }


  input:focus {
    outline: none;
  }


  html {
    font-family: 'Lexend Deca';
    font-size: 18px;
    background-color: #fafafa;
  }

  .footer,
.header,
.main {
  padding: 32px 23px;
}

.main {
  margin: 88px 0;
}

@media (min-width: 575.98px) {
  .footer,
  .header,
  .main {
    padding: 32px calc(50% - 290px);
  }
}

@media (min-width: 767.98px) {
  .footer,
  .header,
  .main {
    padding: 32px calc(50% - 360px);
  }
}

@media (min-width: 991.98px) {
  .footer,
  .header,
  .main {
    padding: 32px calc(50% - 480px);
  }
}

@media (min-width: 1371.98px) {
  .footer,
  .header,
  .main {
    padding: 32px calc(50% - 640px);
  }
}


`
export default GlobalStyle
