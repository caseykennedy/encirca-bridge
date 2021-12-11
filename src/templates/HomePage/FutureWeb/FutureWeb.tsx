// FutureWeb
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Heading } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Section from '../../../components/Section'

// SVG
import DeviceArrayIllustration from '../../../../static/device-array.svg'
import Globe from '../../../../static/globe.svg'

// ___________________________________________________________________

const features = [
  {
    title: 'Own your domain',
    description:
      "Obtain your branded TLDs on the  internet's blockchain-based digital identity layer, Handshake.",
    icon: <Globe />,
  },
  {
    title: 'dWeb your brand',
    description:
      'Onboard to Web 3.0, experiment with your TLD, deploy your website and content seamlessly.',
    icon: <Globe />,
  },
  {
    title: 'Grow your name',
    description:
      'Create an online community of fans, customers, suppliers and partners with decentralized apps.',
    icon: <Globe />,
  },
]

const FutureWeb = () => (
  <Section>
    <Flex sx={{ flexDirection: ['column', 'row'], gap: 6 }}>
      <Box sx={{ flex: 1 }}>
        <Box mr={[4, 6, 8]}>
          <h2>Step firmly into the future of the web.</h2>
          <p>
            Bridge by <strong>EnCirca&trade;</strong> provides Handshake DNS
            name registration and defensive protection for individuals, brands,
            trademark lawyers, top Alexa websites and existing ICANN TLDs.
          </p>
          <a href="/" target="_blank" className="text--link">
            Claim your name
          </a>
        </Box>
      </Box>

      <Box sx={{ flex: 1 }}>
        <DeviceArrayIllustration />
      </Box>
    </Flex>

    <Flex sx={{ flexDirection: ['column', 'row'], gap: 5, mt: [6, 7] }}>
      {features.map((feature, idx) => (
        <Box
          sx={{
            border: theme.border,
            borderRadius: theme.borderRadius,
            flex: 1,
            padding: [4, 5],
            transition: theme.transition.global,
            "&:hover": {
              background: theme.colors.secondary
            }
          }}
          key={idx}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 5,
            }}
          >
            <Heading as="h4">{feature.title}</Heading>
            {feature.icon}
          </Flex>
          <p>{feature.description}</p>
        </Box>
      ))}
    </Flex>
  </Section>
)

export default FutureWeb
