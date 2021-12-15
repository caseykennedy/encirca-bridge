// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'
import Widgets from './widgets'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  ${Widgets}
  
  html,
  body {
    background: ${theme.colors.background};
    border: 0;
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  .img {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles

// ___________________________________________________________________
