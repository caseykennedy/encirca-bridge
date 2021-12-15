// HandshakeBadge:
// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import HandshakeLogo from '../SVG/Handshake'

// ___________________________________________________________________

type Props = {
  fill?: string
  message?: string
}

const HandshakeBadge = ({ fill, message }: Props) => (
  <Flex>
    <Text sx={{ fontSize: 2, whiteSpace: 'nowrap' }}>
      {message || 'Decentralized on'}
    </Text>
    <Box px={3}>
      <HandshakeLogo fill={fill || 'black'} />
    </Box>
    <Text sx={{ alignSelf: 'flex-end', fontSize: 2, fontWeight: 600, mb: 0 }}>
      Handshake
    </Text>
  </Flex>
)

export default HandshakeBadge
