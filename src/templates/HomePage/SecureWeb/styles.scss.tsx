// SecureWeb Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Timeline = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: ${theme.space[7]} 0;
  padding: ${theme.space[6]};
  position: relative;
  width: 100%;

  border: ${theme.border};
  border-radius: calc(${theme.borderRadiusLarge} / 2);
  text-align: center;

  @media ${theme.mq.tablet} {
    border-radius: ${theme.borderRadiusLarge};
    margin: ${theme.space[8]} 0;
    padding: ${theme.space[7]};
  }
`

export const Features = styled.div`

  @media ${theme.mq.tablet} {
  }
`

export default Timeline
