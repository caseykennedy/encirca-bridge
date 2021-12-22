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
    <Flex
      sx={{
        alignItems: ['flex-start', 'center'],
        flexDirection: ['column', 'row'],
        gap: [6, 7],
        justifyContent: 'space-between',
        mb: 5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <h2>
          Welcome to the
          <br />
          decentralized internet.
        </h2>
      </Box>
      <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
        <HandshakeBadge message="Open source" fill="white" />
      </Flex>
    </Flex>

    <Box>
      <CentralizedDNS />
    </Box>
  </Section>
)

export default Welcome
