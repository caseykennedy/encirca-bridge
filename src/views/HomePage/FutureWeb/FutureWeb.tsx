// FutureWeb
// ___________________________________________________________________

import * as React from 'react'
import { darken } from 'polished'

// Theme + ui
import { Box, Flex, Heading } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import AcquireYourTld from '../AcquireYourTld'
import Section, { Row } from '../../../components/Section'
import FadeIn from '../../../components/FadeIn'

// SVG
import DeviceArrayIllustration from '../../../../static/device-array.svg'
import BridgeIcon from '../../../../static/icon-bridge.svg'
import RubikIcon from '../../../../static/icon-rubik.svg'
import StarIcon from '../../../../static/icon-star.svg'

// ___________________________________________________________________

const features = [
  {
    title: 'Own your domain',
    description:
      "Obtain your branded TLDs on the  internet's blockchain-based digital identity layer, Handshake.",
    icon: <StarIcon />,
  },
  {
    title: 'dWeb your brand',
    description:
      'Onboard to Web 3.0, experiment with your TLD, deploy your website and content seamlessly.',
    icon: <RubikIcon />,
  },
  {
    title: 'Grow your name',
    description:
      'Create an online community of fans, customers, suppliers and partners with decentralized apps.',
    icon: <BridgeIcon />,
  },
]

const FutureWeb = () => (
  <Section border={true}>
    <Row>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          gap: [5, 6, 7],
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box mr={[4, 6, 7]}>
            <h2>Step firmly into the future of the web.</h2>
            <p>
              Bridge by <strong>EnCirca&trade;</strong> provides Handshake DNS
              name registration and defensive protection for individuals,
              brands, trademark lawyers, top Alexa websites and existing ICANN
              TLDs. Your trusted custdodian of TLD’s. Weather its reserved,
              brand new name, We’ll help aquire your name on the dWeb.
            </p>
            <a href="/" target="_blank" className="text--link">
              Claim your TLD
            </a>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <FadeIn threshold={0.75}>
            <DeviceArrayIllustration />
          </FadeIn>
        </Box>
      </Flex>
    </Row>

    <Row>
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row'],
          gap: [5],
        }}
      >
        {features.map((feature, idx) => (
          <Box
            sx={{
              border: theme.border,
              borderRadius: theme.borderRadius,
              flex: 1,
              padding: [4, 5],
              transition: theme.transition.global,
              '&:hover': {
                background: darken(0.1, theme.colors.secondary),
              },
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
    </Row>

    <AcquireYourTld />
  </Section>
)

export default FutureWeb
