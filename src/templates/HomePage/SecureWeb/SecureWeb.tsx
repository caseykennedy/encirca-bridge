// SecureWeb
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'
import HandshakeBadge from '../../../components/HandshakeBadge'
import Icon from '../../../components/Icons'

// SVG
import CentralizedDNS from '../../../../static/centralized-dns.svg'

// ___________________________________________________________________

const features = [
  {
    title: 'Plug & play',
    description:
      'Existing 1,500 ICANN TLDs are reserved for backwards compatibility.',
    icon: <Icon name="chevron" color="white" />,
  },
  {
    title: 'No squatting',
    description:
      'The top 100,000 Alexa website domains are reseerved for claiming by owners.',
    icon: <Icon name="chevron" color="white" />,
  },
  {
    title: 'Fair auctions',
    description:
      'TLDs are acquired by highest bidder via vickrey auction, $HNS burned is paid to no one.',
    icon: <Icon name="chevron" color="white" />,
  },
  {
    title: 'Unrestricted',
    description:
      'Decentralized authority—no one central governance makes decisions for the network. ',
    icon: <Icon name="chevron" color="white" />,
  },
  {
    title: 'Active marketplace',
    description: 'Direct-buy global aftermarket.',
    icon: <Icon name="chevron" color="white" />,
  },
  {
    title: 'To the moon',
    description: 'Over 2 million TLDs registered and counting.',
    icon: <Icon name="chevron" color="white" />,
  },
]

const SecureWeb = () => (
  <Section>
    <Flex
      sx={{
        alignItems: ['flex-start', 'center'],
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        mb: 5,
      }}
    >
      <div>
        <Heading as="h2">
          For a web that is reliable,
          <br />
          private and secure.
        </Heading>
      </div>
      <div>
        <HandshakeBadge fill="white" message="Delivered on" />
      </div>
    </Flex>

    <S.Timeline>Timeline</S.Timeline>

    <S.Features>
      <Box>
        <Heading as="h4" mb={5}>
          Why a<br />
          decentralized web?
        </Heading>
      </Box>

      <Grid columns={[1, 2, 3]} gap={[6, 7]} mt={[6, 7]}>
        {features.map((feature, idx) => (
          <Box key={idx}>
            <Flex
              sx={{
                alignItems: 'center',
                mb: 5,
              }}
            >
              <Flex
                sx={{
                  bg: 'secondary',
                  borderRadius: theme.borderRadius,
                  py: 2,
                  px: 3,
                }}
              >
                {feature.icon}
              </Flex>
              <Heading as="h4" ml={4}>
                {feature.title}
              </Heading>
            </Flex>
            <Text>{feature.description}</Text>
          </Box>
        ))}
      </Grid>
    </S.Features>
  </Section>
)

export default SecureWeb
