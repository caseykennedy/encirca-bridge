// Welcome
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'
import HandshakeBadge from '../../../components/HandshakeBadge'

// SVG
import CentralizedDNS from '../../../../static/centralized-dns.svg'

// ___________________________________________________________________

const Welcome = () => (
  <Section>
    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
      <Box>
        <h2>
          Welcome to the
          <br />
          decentralized internet.
        </h2>
      </Box>
      <Box>
        <HandshakeBadge fill="white" />
      </Box>
    </Flex>
    <Box>
      <CentralizedDNS />
    </Box>
  </Section>
)

export default Welcome
