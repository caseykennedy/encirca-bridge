// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  font-weight: 400;
  /* border-bottom: ${theme.border}; */
  padding: ${theme.space[5]} 0;
  overflow: hidden;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 0;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[6]} 0;
  }

  .decorator {
    opacity: 0.75;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    svg {
      transform: scale(3);

      @media ${theme.mq.tablet} {
        transform: scale(1.15);
      }
    }
  }

  a {
    transform: text-decoration ${theme.transition.global};

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  .footer {
    &__inner {
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      margin: 0 auto;
      max-width: ${theme.maxWidth};
      position: relative;
      z-index: 1;

      .utilities {
        display: flex;
        flex-direction: column;
        padding-bottom: ${theme.space[10]};
        gap: ${theme.space[5]};

        @media ${theme.mq.tablet} {
          flex-direction: row;
        }

        .util {
          display: flex;
          flex: 1;
          align-items: center;
          flex-direction: column;

          padding: ${theme.space[7]};

          background: ${theme.colors.background};
          border: ${theme.border};
          border-radius: ${theme.borderRadius};
          text-align: center;

          svg {
            margin: 0 ${theme.space[5]};
            width: 40px;
          }
        }
      }

      .legal {
        display: flex;
        align-items: center;
        flex: 2;
        justify-content: space-between;
      }
    }
  }
`

export default Footer
