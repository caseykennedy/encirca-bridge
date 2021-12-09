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
      gap: ${theme.space[6]};

      box-sizing: content-box;
      margin: 0 auto;
      padding: 0 ${theme.space[5]};
      max-width: ${theme.maxWidth};

      @media ${theme.mq.tablet} {
        gap: ${theme.space[6]};
        padding: 0 ${theme.space[6]};
      }

      @media ${theme.mq.desktop} {
        gap: ${theme.space[7]};
      }

      .message {
        flex: 1;
      }

      .art {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        @media ${theme.mq.desktop} {
          flex: 1.2;
        }

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
