// YourInternet
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'

// SVG
import StarIcon from '../../../../static/globe.svg'
import BridgeGridArt from '../../../../static/bridge-grid.svg'

// ___________________________________________________________________

const features = [
  {
    title: 'Plug play',
    description:
      'Existing 1,500 ICANN TLDs are reserved for backwards compatibility.',
    icon: <StarIcon />,
  },
  {
    title: 'No squatting',
    description:
      'The top 100,000 Alexa website domains are reseerved for claiming by owners.',
    icon: <StarIcon />,
  },
  {
    title: 'Fair auctions',
    description:
      'TLDs are acquired by highest bidder via vickrey auction, $HNS burned is paid to no one.',
    icon: <StarIcon />,
  },
  {
    title: 'Unrestricted',
    description:
      'Decentralized authority—no one central governance makes decisions for the network. ',
    icon: <StarIcon />,
  },
  {
    title: 'Active marketplace',
    description: 'Direct-buy global aftermarket.',
    icon: <StarIcon />,
  },
  {
    title: 'To the moon',
    description: 'Over 2 million TLDs registered and counting.',
    icon: <StarIcon />,
  },
]

const YourInternet = () => (
  <Section>
    {/* <Flex sx={{ flexDirection: ['column', 'row'], gap: 6 }}>
      <Box sx={{ flex: 1 }}>
        <Heading as="h2" mb={5}>
          Your name, your internet.
          <br />
          Bridge brings you in.
        </Heading>
        <BridgeGridArt />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Text as="p" variant="lead" mb={5}>
          Handshake replaces the web’s root zone with an open-source protocol
          which manages the registration, renewal and transfer of DNS top-level
          domains (TLDs) with the blockchain: crytpo-decentralizing and
          upgrading the world wide web.
        </Text>
        <Text as="p" variant="lead">
          Bridge acquires your brand name or ICANN TLD on Handshake, seamlessly
          and worry-free.
        </Text>
      </Box>
    </Flex> */}

    <Box>
      <Heading as="h2" mb={5}>
        Your name, your internet.
        <br />
        Bridge brings you in.
      </Heading>
    </Box>

    <Flex sx={{ flexDirection: ['column', 'row'], gap: 6 }}>
      <Box sx={{ flex: 1 }}>
        <BridgeGridArt />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Text as="p" variant="lead" mb={5}>
          Handshake replaces the web’s root zone with an open-source protocol
          which manages the registration, renewal and transfer of DNS top-level
          domains (TLDs) with the blockchain: crytpo-decentralizing and
          upgrading the world wide web.
        </Text>
        <Text as="p" variant="lead">
          Bridge acquires your brand name or ICANN TLD on Handshake, seamlessly
          and worry-free.
        </Text>
      </Box>
    </Flex>

    <S.HandshakeFeatures>
      <Grid columns={[1, 2, 3]} gap={[6, 7]}>
        {features.map((feature, idx) => (
          <Box key={idx}>
            <Flex
              sx={{
                alignItems: 'center',
                mb: 5,
              }}
            >
              {feature.icon}
              <Heading as="h4" ml={4}>
                {feature.title}
              </Heading>
            </Flex>
            <Text>{feature.description}</Text>
          </Box>
        ))}
      </Grid>
    </S.HandshakeFeatures>

    <S.LearnMore>
      <Box>
        <Heading as="h4" mb={5}>Enter the third internet era.</Heading>
      </Box>
      <Box>[slider]</Box>
    </S.LearnMore>
  </Section>
)

export default YourInternet
