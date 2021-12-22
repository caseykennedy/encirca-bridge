// FutureProof Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const FutureProof = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: ${theme.space[6]};
  position: relative;
  width: 100%;

  background: ${theme.colors.highlight};
  /* border: ${theme.border}; */
  border-radius: calc(${theme.borderRadiusLarge} / 2);
  text-align: center;

  @media ${theme.mq.tablet} {
    border-radius: ${theme.borderRadiusLarge};
    padding: ${theme.space[7]};
  }

  .decorator {
    position: absolute;
    top: calc(${theme.space[5]} * -0.5);
    left: 0;
    right: 0;
    width: 100%;

    @media ${theme.mq.tablet} {
      top: calc(${theme.space[5]} * -1);
    }

    svg {
      max-width: 740px;
    }
  }

  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;

    .logo-pill {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 ${theme.space[6]};
      padding: ${theme.space[5]} ${theme.space[6]};

      background: ${theme.colors.background};
      border: ${theme.border};
      border-color: ${theme.colors.primary};
      border-radius: 99px;
      border-width: 2px;

      svg {
        width: 60px;
      }
    }
  }
`

export default FutureProof
