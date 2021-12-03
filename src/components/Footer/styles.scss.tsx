// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  border-top: ${theme.border};
  padding-top: ${theme.space[5]};
  padding-bottom: ${theme.space[5]};
  width: 100%;

  .footer {
    &__inner {
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      margin: 0 auto;
      max-width: ${theme.maxWidth};

      .legal {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`

export default Footer