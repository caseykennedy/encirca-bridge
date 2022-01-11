// Welcome
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import HandshakeBadge from '../../../components/HandshakeBadge'
import FadeIn from '../../../components/FadeIn'

// SVG
import CentralizedDNS from '../../../../static/centralized-dns.svg'

// ___________________________________________________________________

const Welcome = () => (
  <Section border={true}>
    <Flex
      sx={{
        alignItems: ['flex-start', 'center'],
        flexDirection: ['column', 'row'],
        gap: [6, 7, 8],
        justifyContent: 'space-between',
        mb: [6, 7],
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

    <FadeIn>
      <CentralizedDNS />
    </FadeIn>
  </Section>
)

export default Welcome
