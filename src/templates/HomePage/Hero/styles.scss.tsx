// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Hero = styled(Box)`
  width: 100%;

  .hero {
    &__inner {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: content-box;
      margin: 0 auto;
      max-width: ${theme.maxWidth};

      .message {
        flex: 1;
      }

      .art {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        svg {
          max-width: 570px;
        }
      }

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }
    }
  }
`

export default Hero
