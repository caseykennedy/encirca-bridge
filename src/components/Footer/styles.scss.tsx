// Footer styles:

// ___________________________________________________________________

import { darken } from 'polished'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  background: ${darken(0.015, theme.colors.background)};
  font-weight: 400;
  /* border-bottom: ${theme.border}; */
  padding: ${theme.space[6]} 0;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 0;

  @media ${theme.mq.tablet} {
    position: sticky;
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
        margin-bottom: ${theme.space[7]};
        gap: ${theme.space[4]};

        @media ${theme.mq.tablet} {
          flex-direction: row;
          margin-bottom: ${theme.space[10]};
          gap: ${theme.space[5]};
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
        flex-direction: column-reverse;
        justify-content: space-between;
        line-height: 2.25;

        @media ${theme.mq.tablet} {
          flex-direction: row;
        }

        .nav {
          display: flex;
          align-items: center;
          flex-direction: column;

          @media ${theme.mq.tablet} {
            flex-direction: row;
          }

          &__links {
            display: flex;
            align-items: center;
            flex-direction: column-reverse;

            @media ${theme.mq.tablet} {
              flex-direction: row;
            }

            a {
              margin: 0;

              @media ${theme.mq.tablet} {
                margin-left: ${theme.space[5]};
              }
            }
          }

          .logo {
            display: flex;
            margin: ${theme.space[6]} 0;

            @media ${theme.mq.tablet} {
              margin: 0;
              margin-left: ${theme.space[6]};
            }
          }
        }
      }
    }
  }
`

export default Footer
