// YourInternet Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Section from '../../../components/Section'

// ___________________________________________________________________

export const HandshakeFeatures = styled.div`
  background: ${theme.colors.secondary};
  border-radius: calc(${theme.borderRadiusLarge} / 2);
  margin-top: ${theme.space[6]};
  padding: ${theme.space[6]};
  width: 100%;

  @media ${theme.mq.tablet} {
    border-radius: ${theme.borderRadiusLarge};
    margin-top: ${theme.space[7]};
    padding: ${theme.space[7]};
  }
`

export const LearnMore = styled.div`
  margin-top: ${theme.space[6]};
  width: 100%;

  @media ${theme.mq.tablet} {
    margin-top: ${theme.space[7]};
  }
`

export default HandshakeFeatures
