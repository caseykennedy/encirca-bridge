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
import IconLayerStack from '../../../../static/icon-layer-stack.svg'
import IconClipboard from '../../../../static/icon-clipboard.svg'
import IconCubes from '../../../../static/icon-cubes.svg'

// ___________________________________________________________________

const features = [
  {
    title: 'Open',
    description:
      'Durably decentralized, open-source root zone making the web public access commons, open for all.',
  },
  {
    title: 'Trustless',
    description:
      'Uncensorable, permissionless protocols secured by the network with no middle parties.',
  },
  {
    title: 'Secure',
    description:
      'Sybil attack-resistant, cryptographically authenticated identity and resources.',
  },
  {
    title: 'Non-fungible',
    description:
      'Tokenized, proof-of-work ownership & certification for total control over your data.',
  },
  {
    title: 'Expandable',
    description:
      'The existing web, blockchain soft-forked into permissionless and endless utility.',
  },
  {
    title: 'Limitless',
    description:
      'Virtually unlimited app, service and sub-level domain (SLD) naming possibilities.',
  },
]

const timelineData = [
  {
    id: 0,
    decade: '1990s',
    version: '1.0',
    function: 'read',
  },
  {
    id: 1,
    decade: '2000s',
    version: '2.0',
    function: 'read + write',
  },
  {
    id: 2,
    decade: '2020s',
    version: '3.0',
    function: 'read + write + verify',
    highlight: true,
  },
]

const Timeline = () => (
  <S.Timeline>
    {timelineData.map((item, idx) => (
      <div className="timeblock" key={idx}>
        <div className={`${item.highlight ? 'timeblock--highlight' : ''}`}>
          <div>{item.decade}</div>
          <div className="icon">
            {item.id === 0 && <IconClipboard />}
            {item.id === 1 && (
              <>
                <IconClipboard />
                <IconLayerStack />
              </>
            )}
            {item.id === 2 && (
              <>
                <IconClipboard />
                <IconLayerStack />
                <IconCubes />
              </>
            )}
          </div>
          <div className="version">web {item.version}</div>
          <div>{item.function}</div>
        </div>
      </div>
    ))}
  </S.Timeline>
)

const SecureWeb = () => (
  <Section border={true}>
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
        <Heading as="h2">
          For a web that is reliable, private and secure.
        </Heading>
      </Box>
      <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
        <HandshakeBadge fill="white" message="Delivered on" />
      </Flex>
    </Flex>

    <Timeline />

    <Box mb={[5, 0]}>
      <Box>
        <Heading as="h4" mb={5}>
          Why a<br />
          decentralized web?
        </Heading>
      </Box>

      <Grid columns={[1, 2, 3]} gap={[5, 5, 7]} mt={[6, 7]}>
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
                  p: 3,
                }}
              >
                <Icon name="checkmark" color="white" />
              </Flex>
              <Heading as="h4" ml={4}>
                {feature.title}
              </Heading>
            </Flex>
            <Text as="p">{feature.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  </Section>
)

export default SecureWeb
