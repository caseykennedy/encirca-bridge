// Hero Styles:
// ___________________________________________________________________

import {lighten} from 'polished'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Hero = styled(Box)`
  /* background: ${lighten(0.05, theme.colors.background)}; */
  width: 100%;

  .hero {
    &__inner {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      justify-content: space-between;
      gap: ${theme.space[5]};

      box-sizing: content-box;
      margin: 0 auto;
      padding: 0 ${theme.space[5]};
      max-width: ${theme.maxWidth};

      @media ${theme.mq.tablet} {
        gap: ${theme.space[6]};
        padding: ${theme.space[4]} 0 ${theme.space[6]};
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
        justify-content: center;
        padding: ${theme.space[5]} ${theme.space[6]};
        width: 100%;

        @media ${theme.mq.tablet} {
          flex: 0.6;
          padding: 0;
        }

        @media ${theme.mq.desktop} {
          flex: 1;
          justify-content: flex-end;
          padding: 0;
        }

        svg {
          max-width: 580px;
          width: 100%;
        }
      }

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }
    }
  }
`

export default Hero
