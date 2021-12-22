// Hero Styles:
// ___________________________________________________________________

import { lighten } from 'polished'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import Section from '../../../components/Section'

// ___________________________________________________________________

const HandshakeRadius = '115px'

export const ClaimYours = styled(Section)`
  .handshake {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(${HandshakeRadius} * -0.5);

    background: ${theme.colors.background};
    border: ${theme.border};
    /* border-color: ${theme.colors.primary}; */
    border-radius: 99px;
    border-width: 2px;
    height: ${HandshakeRadius};
    width: ${HandshakeRadius};

    svg {
      width: 60px;
    }
  }
`

export default ClaimYours
