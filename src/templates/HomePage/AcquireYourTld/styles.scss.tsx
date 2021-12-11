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
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      cursor: pointer;
      margin: 0;
      padding: ${theme.space[5]};
      transition: ${theme.transition.global};

      &:hover {
        border-color: ${theme.colors.primary};
        /* background: ${darken(0.25, theme.colors.primary)}; */
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
