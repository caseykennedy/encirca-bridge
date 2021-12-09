// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  font-weight: 400;
  border-top: ${theme.border};
  padding-top: ${theme.space[7]};
  padding-bottom: ${theme.space[6]};
  overflow: hidden;
  position: relative;
  width: 100%;

  .decorator {
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

        @media ${theme.mq.tablet} {
          flex-direction: row;
        }

        .util {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;

          padding: ${theme.space[7]};
          margin-bottom: ${theme.space[5]};

          background: ${theme.colors.background};
          border: ${theme.border};
          border-radius: ${theme.borderRadius};
          text-align: center;

          @media ${theme.mq.tablet} {
            flex-direction: row;
            margin-right: ${theme.space[4]};
            margin-bottom: 0;

            &:last-child {
              margin-right: 0;
              margin-left: ${theme.space[4]};
            }
          }
        }
      }

      .legal {
        display: flex;
        flex: 2;
        justify-content: space-between;
      }
    }
  }
`

export default Footer
