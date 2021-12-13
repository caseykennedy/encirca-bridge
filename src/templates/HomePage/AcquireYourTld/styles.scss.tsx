// AcquireYourTld Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Flex } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const AcquireYourTld = styled(Flex)`
  gap: ${theme.space[5]};
  width: 100%;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.space[5]};
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      flex: 1;
      display: flex;
      align-items: center;
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      cursor: pointer;
      margin: 0;
      padding: ${theme.space[5]};
      transition: ${theme.transition.global};

      .step {
        margin-right: ${theme.space[4]};

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${theme.space[2]};
          height: 54px;
          width: 54px;

          border: ${theme.border};
          border-width: 2px;
          border-radius: 999px;
          font-size: ${theme.fontSizes[2]};
          font-weight: 400;
          text-transform: capitalize;
        }
      }

      &:hover,
      &.active {
        /* border-color: ${theme.colors.primary}; */
        background: ${darken(0.1, theme.colors.secondary)};

        .step {
          margin-right: ${theme.space[4]};

          div {
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        }
      }
    }
  }

  figure {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${theme.border};
    border-radius: ${theme.borderRadius};
  }
`

export default AcquireYourTld
