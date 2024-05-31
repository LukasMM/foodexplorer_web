import { createGlobalStyle } from 'styled-components'

import { mixins } from './mixins'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_300};

    -webkit-font-smoothing: antialiased;
  }

  body, textarea, p, input {
    ${mixins.fonts.robotoRegularSmall}
  }

  button, h1, span, a, strong {
    ${mixins.fonts.poppinsRegular300}
  }
`